import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddsubscribeComponent } from './addsubscribe/addsubscribe.component';




@Component({
  selector: 'app-subscribeplans',
  templateUrl: './subscribeplans.component.html',
  styleUrls: ['./subscribeplans.component.scss']
})
export class SubscribeplansComponent implements OnInit {


  type: any;

  public allData =  [];

  p: Number = 1;
  count: Number = 5;
  constructor(
    private http: HttpService,
    private modalService: BsModalService

  ) { }

  ngOnInit() {
    this.subscribedata();
  }

  subscribedata() {
    this.http.getData(ApiUrl.subscribelist)
      .subscribe(res => {
        this.allData = res.data.dataList;
      }, error => { })
  }

  deletitem(data, index) { 
    const obj: any = {
      id: data.id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.subscribedelete, obj).subscribe((res) => {
      this.allData.splice(index, 1);
      console.log(data)
    }, error => { })
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddsubscribeComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if (data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.subscribedata();
    })
  }


  Search() {
    if (this.type == "") {
      this.ngOnInit();
    } else {
      this.allData = this.allData.filter(res => {
        return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase());
      })
    }

  }

 

}
