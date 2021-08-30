import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ApiUrl } from 'src/app/core/apiUrl';

@Component({
  selector: 'app-addsubscribe',
  templateUrl: './addsubscribe.component.html',
  styleUrls: ['./addsubscribe.component.scss']
})
export class AddsubscribeComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();

  form: FormGroup;
  id = '';

  constructor(
    private fb: FormBuilder, private http: HttpService, private bsModalRef: BsModalRef,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.subscribePlanesData();
  }

  subscribePlanesData() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      typeNumber: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['', Validators.required]
    });
  }


  patchData(data) {
    this.id = data._id;
    console.log(data)
    this.form.patchValue({
      type: data.type,
      typeNumber: data.typeNumber,
      price: data.price,
      currency: data.currency,
    })
  }

  formSubmit() {
    if (this.form.valid) {
      this.charitieaddEdit();
    }
  }

  //  add data
  charitieaddEdit() {
    const obj = JSON.parse(JSON.stringify(this.form.value));
    if (this.id) {
      obj['_id'] = this.id;
    }
    this.http.postData(ApiUrl.addEditsubscribeplan, obj).subscribe(res => {
      this.bsModalRef.hide();
      this.onClose.next();
    });
  }

}
