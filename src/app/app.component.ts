import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-two';
  userName = ""
  // disabledButton = true

  constructor() {
    setTimeout(() => {
      console.log("all its ok")
    }, 1000)
  }
  // onUpdateUserName() {
  //   this.disabledButton = this.userName !== "" ? false : true
  // }
  // buttonReset() {
  //   this.userName = ""
  //   this.disabledButton = true
  // }
}
