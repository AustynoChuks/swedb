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
  showError = false;
  formData = {
    purpose:"",
    address:"",
    credit_type:"",
    amount:0,
    termYear:'',
    termMonth:'',
    repayDate:"",
    salary:'',
    otherIncome:false,
    rentIncome:'',
    socialIncome:'',
    others:'',
    incomeFromBusiness:false,
    obligation:false,

    firstname:'',
    lastname:'',
    code:'',
    maritalStatus:'',
    education:'',
    dependent:'',


  }

  getKeys(){
    return Object.keys(this.formData)
  }

  verifyApplication(){
    const { purpose, address, credit_type, amount, termYear,
      termMonth,
      repayDate,
      salary,
      otherIncome,
      incomeFromBusiness,
      obligation
    } = this.formData;
    if(purpose == "" || address == "" || salary=='' || credit_type == "" || amount == 0 || termYear == '' || termMonth == '' || repayDate == "" || Number(termMonth) <= 0 || Number(termYear) <= 0){
      this.showError = true;
      return
    }
    this.forward()
  }

  loanTermEmpty(){
    const { termMonth, termYear} = this.formData
    let tm = Number(termMonth), ty = Number(termYear);
    return tm <= 0 || ty <= 0 || isNaN(tm) || isNaN(ty)
  }

  back(){
    this.showError = false;
    this.currentTab = (this.currentTab > 1) ? this.currentTab - 1 : 1;
    this.transitionDirection = "right"
  }

  forward(to = 0){
    this.showError = false;
    if(to !== 0){
      this.currentTab = to
    }else{
      this.currentTab = (this.currentTab < 3) ? this.currentTab + 1 : this.currentTab;
    }
    this.transitionDirection = "left"
  }

  getTotalIncome(){
    const { others, salary, socialIncome, rentIncome } = this.formData
    return Number(others) + Number(salary) + Number(socialIncome) + Number(rentIncome);
  }

  verifyPersonalData(){
    const {firstname, lastname, code,
    maritalStatus,
    education,
    dependent,} = this.formData

    if(firstname == '' || lastname == '' || code == '' || maritalStatus == '' || education == '' || dependent == ''){
      this.showError = true;
      return;
    }
    this.forward()
  }

  submit(){
    this.forward(4)
  }
}
