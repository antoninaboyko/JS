import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input () img = ''
  @Input() name = ''
  @Input() status = ''
  @Output() remove = new EventEmitter<void>();

  removeUser() {
    this.remove.emit();
  }
}
