import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { UtilService } from '../../../services/util/util.service';

@Component({
  selector: 'app-addappdata',
  templateUrl: './addappdata.component.html',
  styleUrls: ['./addappdata.component.scss']
})
export class AddappdataComponent implements OnInit {
  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  studioList: any;
  
  constructor(
    private fb: FormBuilder,
    private message: MessageService,
    private http: HttpService,
    public bsModalRef: BsModalRef,
    public util: UtilService
  ) {}

  ngOnInit(): void {   
    this.makeForm();
} 
 makeForm() {
    this.form = this.fb.group({
      universities: this.fb.array([]),
      
    });
  
  if (this.modalData) {
    this.patchData(this.modalData);
  } else {

    this.createItem('universities');
    this.addItem('universities');
   
  }
}
createItem(type): FormGroup {
  switch (type) {
    case 'universities':
      return this.fb.group({
        universities: ['', Validators.required],
      });  
  }
}
addItem(type): void {
  switch (type) {
    case 'universities':
      this.universities.push(this.createItem(type));
      break;
  }
}

get universities(): FormArray {
  return this.form.get('universities') as FormArray;
}

patchData(data) {
  this.form.patchValue({
  });

  const universities = [];
    data.universities.map((val) => {
      this.addItem('universities');
      universities.push({
        universities: val
      });
    });

    this.form.patchValue({
      universities,
    });
  }  
  // [{ }]
  // [ ]
  getValue(arr,key){
    let temp=[];
    arr.forEach(element => {
        temp.push(element[key])
    });
    
    return temp;
    }
    formSubmit() {
      console.log(this.form.value)
      if (this.form.valid) {
        const obj = JSON.parse(JSON.stringify(this.form.value));
        obj.universities = this.getValue(this.form.value.universities,'universities');
       
        let msg = SuccessErrorConst.addedSuccess;
        if (this.modalData) {
          obj[`_id`] = this.modalData._id;
          msg = SuccessErrorConst.updatedSuccess;
        }
        // delete obj.dates;
        this.http.postData(ApiUrl.addEdit, obj).subscribe(
          () => {
            this.onClose.next();
            this.message.toast('success', msg);
            this.bsModalRef.hide();
          }, () => {
          });
      } else {
          this.showError = true;
      // }
        }
    }
  }