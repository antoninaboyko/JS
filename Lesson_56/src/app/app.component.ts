import { Component } from '@angular/core';
import { UsersService } from './service/developer-rating.service';
// import { PopUpComponent } from './pop-up/pop-up.component';
// import { TeamRatingService } from './service/team-rating.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
  
})
export class AppComponent {
rating: any[];
constructor(public developerRatingService: UsersService){
  this.rating = this.developerRatingService.users;
};
// @ViewChild('popUp', { read: ViewContainerRef })
//   private viewRef!: ViewContainerRef
//   private componentRef!: ComponentRef<PopUpComponent>

  
//   showPopUp(){
//     this.viewRef.createComponent(PopUpComponent);
//   }

}
