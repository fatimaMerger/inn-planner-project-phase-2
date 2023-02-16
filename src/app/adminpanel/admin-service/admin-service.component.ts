import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface DataItem {
  heading: string;
  subheading: string;
  price:string;
  description:string;
}
@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.scss']
})
export class AdminServiceComponent implements OnInit {
  isVisible = false;
  isVisible2=false;
  updateServiceForm: FormGroup;
  loading = false;
  constructor() { }

  ngOnInit(): void {
    this.hideNavAndFooter();
  }

  hideNavAndFooter(){
    let headerStyle: any = document.querySelector('app-top-nav-bar');
    console.log('yo',headerStyle)
    headerStyle.style.display = "none"
    let footerStyle:any = document.querySelector('app-footer');
    footerStyle.style.display = "none"
  }
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      heading: 'Comprehensive Financial Planning',
      subheading: 'Flat Fixed Fee',
      price: '11,000 per year',
      description:'Risk Profiling, Review of existing assets and liabilities, Counselling for removing unproductive assets,Assessment of Financial Goals (retirement, child education, housing, vacation, vehicle etc),Prioritization of Financial Goals,Goal Affordability,Goal-based Investment Advice,Customized Asset Allocation,Detailed Investment Plan (including mutual funds),',
    }
  ];
  listOfDisplayData = [...this.listOfData];

  showEditModal(): void {
    this.isVisible2 = true;
  }
  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }
  
  validateForm() {
    if (!this. updateServiceForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.updateServiceForm.controls) {
      if (i) {
        this.updateServiceForm.controls[i].markAsDirty();
        this.updateServiceForm.controls[i].markAsTouched();
        this.updateServiceForm.controls[i].setErrors({ newerror: true });
        this.updateServiceForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }

}
