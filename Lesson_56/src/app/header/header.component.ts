import { Component, Input } from '@angular/core';
import { GroupNameService } from '../service/group-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [GroupNameService],
})
export class HeaderComponent {
  constructor(
  public groupNameService: GroupNameService,
  ){}
    changeGroupName(input: any){
      this.groupNameService.groupName = input.value
      input.value = ''
    }

}
