import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
@ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any> | undefined;
  seconds: any = 10;
  showVideoModal: boolean = false;
  interval: any;
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  
  }
  listOfData:any = [
    {
      key: '1',
      Pending_as_of_last_month: 0,
      received_from: 'At the beginning of month',
    },
    {
      key: '2',
      Pending_as_of_last_month: 0,
      received_from: 'Received during the month',
    },
    {
      key: '4',
      Pending_as_of_last_month: 0,
      received_from: 'Resolved during the month',
    },
    {
      key: '5',
      Pending_as_of_last_month: 0,
      received_from: 'Pending at the ending of the month',
    },
    {
      key: '6',
      Pending_as_of_last_month: '',
      received_from: 'Reason for pendency',
    }
  ];
  openSEBIModal(): void {
    this.showVideoModal = true; 
    this.seconds = 10;
    this.interval?.clearInterval();
    this.interval = setInterval(() => {
      if (this.seconds == 0) {
        this.showVideoModal = false;
      } else {
        this.seconds = this.seconds - 1;
      } 
    },1000)
  }

  handleCancelTop(){
    this.showVideoModal = false;
  }

  handleOkTop(){
    this.showVideoModal = false;
  }

  downloadPDF() {
    let url = 'https://d1um67fy76m42o.cloudfront.net/assets/offerfiles/plnrdoc.pdf'
    FileSaver.saveAs(url, `${'your-file'}_${'downloadable'}.pdf`);
  }

}
