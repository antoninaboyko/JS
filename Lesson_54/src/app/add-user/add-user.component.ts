import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onUser = new EventEmitter();

  nameInputValue = '';
  statusInputValue = '';
  imgInputValue = '';


  onName(event: any){
    this.nameInputValue = event.target.value;
  }

  onStatus(event: any){
    const status = event.target.value;
    if (status.length > 50) {
      this.statusInputValue = status.slice(0, 50);
    } else {
      this.statusInputValue = status
    }
  }

  onAvatar(event: any){
    this.imgInputValue = event.target.value;
  }

  addNewUser(nameValue: string, statusValue: string, imgValue: string ) {
    const value = {
      name: nameValue,
      status: statusValue,
      img: imgValue,
    }
    this.onUser.emit(value)
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.imgInputValue = ''; 
  }
}
