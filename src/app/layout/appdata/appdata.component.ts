import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { AddappdataComponent } from './addappdata/addappdata.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appdata',
  templateUrl: './appdata.component.html',
  styleUrls: ['./appdata.component.scss']
})
export class AppdataComponent implements OnInit {

  datalis : any;
  empty = [];

  constructor(
    private http: HttpService ,
    private modalService : BsModalService,
    private router: Router,
  ) { }

  ngOnInit(){
   this.getappData();
  }

  getappData(){
      this.http.getData(ApiUrl.appdata).subscribe(res =>{
        this.datalis = res.data.dataList;
         console.log(this.datalis)
      })
  }


  deletitem(data, index) {
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.adddelete, obj).subscribe((res) => {
      this.datalis.splice(index, 1)
    }, error => {});
  }
  
  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddappdataComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if(data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.getappData();
     
    });
    this.router.navigate(['/massage']); 
  }
 

  }
