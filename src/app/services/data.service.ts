import { Friend } from './../models/friend';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { firestore } from "firebase";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  messages: Observable<Message[]>;
  messageCollection : AngularFirestoreCollection<Message>; //pipeline to Firebase collection (table)

  friends: Observable<Friend[]>;
  friendsCollection : AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) {
    this.messageCollection = fb.collection<Message>("posts"); //Open the pipeline
    this.friendsCollection = fb.collection<Friend>("friends");
   }

   public saveMessage(message: Message){

    var item = Object.assign({},message);
     this.messageCollection.add(item);

     console.log("complex", message);
     console.log("simple", item);
   }

   retrieveMessagesFromDB(){
     this.messages = this.messageCollection.valueChanges();
   }

  public getAllMessage(){
    this.retrieveMessagesFromDB(); // fill the array
    return this.messages; // return the array
   }

   public saveFriend(friend: Friend){
     var item = Object.assign({}, friend);
     this.friendsCollection.add(item);
   }

   public retrieveFriendsFromDB(){
     this.friends = this.friendsCollection.valueChanges();
   }

   public getAllFriends(){
     this.retrieveFriendsFromDB();
     return this.friends;
   }
}