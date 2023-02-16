import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
interface DataItem {
  video: string;
  videoText: string;
}
@Component({
  selector: 'app-admin-start-here',
  templateUrl: './admin-start-here.component.html',
  styleUrls: ['./admin-start-here.component.scss']
})
export class AdminStartHereComponent implements OnInit {

  isVisible = false;
  isVisible2=false;
  updatestartForm: FormGroup;
  loading = false;
  constructor(private msg: NzMessageService) { }

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
      video: ' https://youtu.be/g9Aq1YtSo-o ',
      videoText:'Goal Planning',
    },
    {
      video: 'https://youtu.be/sS2gkgHNR3Q  ',
      videoText:'Guidance',
    },
    {
      video: 'https://youtu.be/fYZ89_HZbGA  ',
      videoText:'Expectations',
    },
    {
      video: ' https://youtu.be/PXGjL0_vkXo ',
      videoText:'Planning Process',
    },
    {
      video: ' https://youtu.be/lDJ1Cko6xes ',
      videoText:'Investment Philosophy',
    },
    {
      video: 'https://youtu.be/NyCKm9POKb4  ',
      videoText:'Timelines',
    },
    {
      video: 'https://youtu.be/K1TolQQjaK8  ',
      videoText:'Clients',
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
    if (!this. updatestartForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.updatestartForm.controls) {
      if (i) {
        this.updatestartForm.controls[i].markAsDirty();
        this.updatestartForm.controls[i].markAsTouched();
        this.updatestartForm.controls[i].setErrors({ newerror: true });
        this.updatestartForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
