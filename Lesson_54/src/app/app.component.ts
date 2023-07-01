import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {name: "Mike", status: "I`m learning angular", img: "https://blogs.nvidia.com/wp-content/uploads/2023/01/creators-collab-hero-image-kv-v2-1280x720.jpg"};

  addUser(newUser: any){
      this.user.name = newUser.name
      this.user.status = newUser.status
      this.user.img = newUser.img
    }
  
    removeUser() {
      this.user.name = '';
      this.user.status = '';
      this.user.img = '';
    }
}
