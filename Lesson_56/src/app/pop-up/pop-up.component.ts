import { Component, Output, EventEmitter} from '@angular/core';
import { GroupNameService } from '../service/group-name.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
    constructor(public groupNameService: GroupNameService) {}

    number = 4;
  @Output() close = new EventEmitter
}
