import { DataService } from './../services/data.service';
import { ShareService } from './../services/share.service';
import { Friend } from './../models/friend';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  myFriends: Friend[] = [];

  constructor(private shared: ShareService, private data: DataService) {
    this.data.getAllFriends().subscribe(list => {
        this.myFriends = [];
        this.myFriends = list.filter(f => f.belongsTo == this.shared.userName);
    });
  }

  saveFriend(){
    this.model.belongsTo = this.shared.userName;
    console.log(this.model);
    this.data.saveFriend(this.model);

    this.model = new Friend();
  }
}
