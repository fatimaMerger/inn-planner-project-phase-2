import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {
  @Input() title: string = '';
  @Input() paragraph: string = '';
  @Input() spantitle: string = '';
  @Input() isHomePage:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
