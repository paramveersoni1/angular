import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CharitiesAddComponent } from './charities-add/charities-add.component';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.scss']
})
export class CharitiesComponent implements OnInit {

  charities = [];

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.charitieList();
  }

  charitieList() {
    this.http.getData(ApiUrl.charitiesdata)
      .subscribe(res => {
        this.charities = res.data.dataList;
      }, error => {})
  }

  deletitem(data, index) {
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.Delete_Charities, obj).subscribe((res) => {
      this.charities.splice(index, 1)
    }, error => {});
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(CharitiesAddComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if(data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.charitieList();
    })
  }

}
