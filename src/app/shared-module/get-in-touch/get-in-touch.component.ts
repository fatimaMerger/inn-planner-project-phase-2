import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
  ) { }

  @Output() close = new EventEmitter();
  emailList = [{ email: '' }];
  loading = false;
  supportEmailFormGroup: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.supportEmailFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: [''],
    });
  }

  submit() {
    if (this.supportEmailFormGroup.valid) {
      this.sendEmail();
    } else {
      this.submitValidate();
    }
  }
  submitValidate() {
    for (const i in this.supportEmailFormGroup.controls) {
      if (i) {
        this.supportEmailFormGroup.controls[i].markAsDirty();
        this.supportEmailFormGroup.controls[i].markAsTouched();
        this.supportEmailFormGroup.controls[i].updateValueAndValidity();
      }
    }
  }

  sendEmail() {
    // this.loading = true;
          this.message.success(
            'Thank you for emailing us! We will get back in touch soon',
            {
              nzDuration: 3500,
            }
          );
  }

}
