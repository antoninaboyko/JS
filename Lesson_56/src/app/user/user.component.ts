import { Component, Input } from '@angular/core';
import { GroupNameService } from '../service/group-name.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [GroupNameService]

})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  
  constructor(
    public groupNameService: GroupNameService
    ){}
    get groupName(): string {
      return this.groupNameService.groupName;
    }
  newName = '';
  newStatus = '';

  editName() {
    if (this.newName.trim() !== '') {
      this.name = this.newName;
    }
    this.newName = '';
  }

  editStatus() {
    if (this.newStatus.trim() !== '') {
      this.status = this.newStatus;
    }
    this.newStatus = '';
  }
}
