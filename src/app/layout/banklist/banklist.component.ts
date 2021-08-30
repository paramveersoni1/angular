import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../core/apiUrl';

import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddBankComponent } from './add-bank/add-bank.component';

// import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.scss']
})



export class BanklistComponent implements OnInit {
  allData:any = [] ;
  pager = {};
  
  name :any;

  constructor(
    private http: HttpService ,
    private fb : FormBuilder,
    private modalService : BsModalService
    ) { }

  ngOnInit(){      
     this.getData();
     
  }
 
  // fetch data
  getData(){
      this.http.getData(ApiUrl.BankListing)
      .subscribe(res => {
        this.allData = res.data.dataList;
      }, error => {})
  }
 
  deletitem(data, index) {
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.deleteBank, obj).subscribe((res) => {
      this.allData.splice(index, 1)
    }, error => {});
  }

  Search(){
    if(this.name == ""){
       this.ngOnInit();
    }else{
      this.allData = this.allData.filter(res =>{
         return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()); 
      })
    }
  }


 
  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddBankComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if(data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.getData();
    })
  }

}
