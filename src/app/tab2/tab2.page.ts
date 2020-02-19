import { DataService } from './../services/data.service';
import { ShareService } from './../services/share.service';
import { Message } from './../models/message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  post: Message = new Message();

  constructor(private ShareSrvc: ShareService, private dataSrvc: DataService) {}

  sendMessage(){
    this.post.from = this.ShareSrvc.userName;
    this.dataSrvc.saveMessage(this.post);
  }

}
