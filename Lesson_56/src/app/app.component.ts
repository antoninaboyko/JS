import { Component, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';
import { UsersService } from './service/developer-rating.service';
import { PopUpComponent } from './pop-up/pop-up.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
  
})
export class AppComponent {
rating: any[];
constructor(
  public developerRatingService: UsersService,

  ){

  this.rating = this.developerRatingService.users;
};
users = [];
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>
  
  

  
  showPopUp(){
    this.viewRef.createComponent(PopUpComponent);

    
    this.componentRef.instance.close.subscribe(()=>{this.viewRef.clear()})
  }
}
