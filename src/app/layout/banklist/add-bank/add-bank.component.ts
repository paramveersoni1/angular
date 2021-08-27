import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from 'src/app/services/util/util.service';


@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {

  form : FormGroup ;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  seletedFile = null ;
  constructor(
    private http: HttpService ,
    private fb : FormBuilder,
    private bsModalRef : BsModalRef,
    private util:UtilService
  ) { }
 

  ngOnInit() {
   this.AddBanklist();
  }

  // add data 
  
  AddBanklist(){
    this.form = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      image : ['',Validators.required],
      accountNo : ['',Validators.required],
   });
   
  } 

  // edit data
  addEdit(){
    const obj=JSON.parse(JSON.stringify(this.form.value))
    this.http.postData(ApiUrl.addBankDATA, obj).subscribe(res=> {
      this.bsModalRef.hide();
       console.log(res);
    });
    
    
  }

  selectImage(event){
     if(event.target.files && event.target.files[0]){
      const obj = {
        image: event.target.files[0]
    };
    this.uploadImage(obj);
     }
  }
  uploadImage(obj) {
    this.http.uploadImageService(ApiUrl.upload_attachment, obj, true).subscribe(response => {
        this.form.controls.image.setValue(this.util.setImagePath(response.data));
        document.getElementById('image')[`value`] = '';
    }, () => {
        document.getElementById('image')[`value`] = '';
    });
}

}
