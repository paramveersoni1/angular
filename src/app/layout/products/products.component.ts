import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { ProductaddComponent } from './productadd/productadd.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any;
  public userdata =  [];
  name:any;

  constructor(
    private http: HttpService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.productData();
  }

  productData() {
    this.http.getData(ApiUrl.productShow).subscribe(res => {
      this.productList = res.data.dataList;
      console.log(this.productList)
    }, error => { })
  }

  
  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(ProductaddComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if(data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.productData();
    })
  }


  Search(){
    if(this.name == ""){
       this.ngOnInit();
    }else{
      this.productList = this.productList.filter( res =>{
         return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()); 
      })
    }
  }



}
