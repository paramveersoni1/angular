import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiUrl } from 'src/app/core/apiUrl';


@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {

  
  public onClose: Subject<{}> = new Subject();

  form: FormGroup;
  modalData: any;
  seletedFile = null;
  id = '';

  constructor(
    private http: HttpService, private fb: FormBuilder, private bsModalRef: BsModalRef,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.productAdddata();
  }
 


  productAdddata() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      // picture: ['', Validators.required],
      mrp: ['', Validators.required],
      discount: ['', Validators.required],
      shippingPrice: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  patchData(data) {
    this.id = data._id;
    console.log(data._id);
    this.form.patchValue({
      name: data.name,
      // picture: data.picture,
      discount: data.discount,
      mrp:data.mrp,
      shippingPrice: data.shippingPrice,
      stock: data.stock
    });
  }

  // upload images

  selectImage(event) {
    if (event.target.files && event.target.files[0]) {
      const obj = {
        image: event.target.files[0]
      };
      this.uploadImage(obj);
    }
  }

  uploadImage(obj) {
    this.http.uploadImageService(ApiUrl.upload_attachment, obj, true).subscribe(response => {
      this.form.controls.image.setValue(this.util.setImagePath(response.data));
      document.getElementById('picture')[`value`] = '';
    }, () => {
      document.getElementById('picture')[`value`] = '';
    });
  };

  formSubmit() {
    if (this.form.valid) {
      this.productaddlistdata();
    }
  }

  //  add data
  productaddlistdata() {
    const obj = JSON.parse(JSON.stringify(this.form.value));
    if (this.id) {
      obj['_id'] = this.id;
    }
    this.http.postData(ApiUrl.productAdd, obj).subscribe(res => {
      this.bsModalRef.hide();
      this.onClose.next();
    });
  }

}



