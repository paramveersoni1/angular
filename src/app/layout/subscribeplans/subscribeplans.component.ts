import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddsubscribeComponent } from './addsubscribe/addsubscribe.component';
import { PaginationControls } from 'src/app/shared/models/pagination-model';



@Component({
  selector: 'app-subscribeplans',
  templateUrl: './subscribeplans.component.html',
  styleUrls: ['./subscribeplans.component.scss']
})
export class SubscribeplansComponent implements OnInit {

  _id: '';
  type: any;
  page: number = 1;
  pagination = new PaginationControls();
  allData: any;

  constructor(
    private http: HttpService,
    private modalService: BsModalService

  ) { }

  ngOnInit() {
    this.subscribedata();
  }

  subscribedata() {

    const obj :any = {
      pageNumber:(this.pagination.page -1 ) *10
    };

    this.http.getData(ApiUrl.subscribelist,obj)
      .subscribe(res => {
        this.allData = res.data.dataList;
        this.pagination.count=res.totalCount;
        console.log(this.allData);
      }, error => { })
  }

  deletitem(data, index) {
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.subscribedelete, obj, true).subscribe((res) => {
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
