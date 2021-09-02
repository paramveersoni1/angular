import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../core/apiUrl';

import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private http: HttpService) { }
 public userdata =  [];
  userName:any;
  p: Number = 1;
  count: Number = 5;

  ngOnInit() {
    this.userlist();
  }

  // add userlist
  userlist() {
    this.http.getData(ApiUrl.userListing)
      .subscribe(res => {
        this.userdata = res.data.dataList;
      })
    console.log(this.userdata)
  }

  // delete user list
 deletitem(data, index) {
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.userDelet, obj).subscribe((res) => {
      this.userdata.splice(index, 1)
    }, error => {});
  }

  Search(){
    if(this.userName == ""){
       this.ngOnInit();
    }else{
      this.userdata = this.userdata.filter(res =>{
         return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase()); 
      })
    }
  }



}
