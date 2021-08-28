import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../core/apiUrl';

import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private http : HttpService) { }
  userdata : any;
  ngOnInit(){
    this.userlist();
  }
  
  // add userlist
  userlist(){
      this.http.getData(ApiUrl.userListing)
      .subscribe(res => {
        this.userdata=res.data.dataList;
      })
      console.log(this.userdata)
  }

  // delete user list
  deletitem( Data , index){
    const obj: any = {
       _id:Data._id,
       isDeleted: true , 
    };
    this.http.putData(ApiUrl.deleteBank, obj).subscribe((res)=>{
       this.userdata.splice(index,1)
    })
}



}
