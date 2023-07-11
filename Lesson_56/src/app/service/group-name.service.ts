import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupNameService {

  constructor() { }
   groupName = 'Healthy lifestyle';
  newGroupName = '';

editGroupName() {
  if (this.newGroupName.trim() !== '') {
    this.groupName = this.newGroupName;
  }
  this.newGroupName = '';
}
}
