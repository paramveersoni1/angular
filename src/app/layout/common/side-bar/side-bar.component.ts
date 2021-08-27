import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'src/app/services/message/message.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { SideBarList } from '../../../core/constant';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    sideBar = SideBarList.list;

    constructor(private message: MessageService, private modalService: BsModalService, private router: Router) {
    }

    ngOnInit() {
    }

    changePassword() {
        this.modalService.show(ChangePasswordComponent, {
            backdrop: 'static',
            keyboard: false
        });
    }


}
