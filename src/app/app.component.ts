import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swedbUI';

  currentTab = 1;
  transitionDirection = 'left' 

  formData = {
    purpose:"",
    address:"",
    amount:0,
    termYear:0,
    termMonth:0,
    repayDate:"",
    salary:0,
    otherIncome:false,
    incomeFromBusiness:false,
    obligation:false
  }

  verifyApplication(){
    alert('hey')
  }

  back(){
    this.currentTab = (this.currentTab > 1) ? this.currentTab - 1 : 1;
    this.transitionDirection = "right"
  }

  forward(){
    this.currentTab = (this.currentTab < 3) ? this.currentTab + 1 : this.currentTab;
    this.transitionDirection = "left"
  }
}
