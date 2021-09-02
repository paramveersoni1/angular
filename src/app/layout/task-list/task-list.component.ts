import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
   
  taskdataList = [];

  constructor( private http: HttpService, private modalService: BsModalService) { }

  ngOnInit(){
     this.getData();
  }
  getData(){
    this.http.getData(ApiUrl.taskdata)
    .subscribe(res => {
      console.log(res,'dhufyg');
      
      this.taskdataList = res.data.pastTask;
    }, error => {})
}

}
