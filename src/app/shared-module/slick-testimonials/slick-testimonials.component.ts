import { isPlatformServer } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-slick-testimonials',
  templateUrl: './slick-testimonials.component.html',
  styleUrls: ['./slick-testimonials.component.scss']
})
export class SlickTestimonialsComponent implements OnInit {

  @Input() isFeaturesComponent: boolean = false;
  showTestimonial = true;
  slideConfigTestimonials = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: "<div class='nav-btn next-slide'><i class='right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='left'></i></div>",
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        },
      },
    ],
  };
  slideConfigTestimonialsFeatures = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: "<div class='nav-btn next-slide'><i class='right fe-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='left fe-left'></i></div>",
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        },
      },
    ],
  };
  slidesTestimonials = [
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },

    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
    {
      address: 'Mumbai',
      name: 'John Doe',
      img: 'assets/images/john.jpg',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam lorem. Morbi accumsan nulla sed nisl efficitur pretium.`,
    },
  ];
  constructor(@Inject(PLATFORM_ID) platformId:any) { 
    this.isServer = isPlatformServer(platformId);
    window.addEventListener('scroll',this.scroll,{passive:true}) //third Argument..
  }
  scroll=()=>{
   let el:any = document.querySelectorAll('.nav-btn');
   if(el){
      // console.log(el)
    for(let i=0;i<el.length;i++){
      el[i].classList.add('fe-nav-btn')
    }
   }
  }

  isServer: boolean;
  ngOnInit(): void {
    if(this.isFeaturesComponent){
      // console.log('called from features',this.isFeaturesComponent)
    }
  }
  ngOnDestroy(){
    let el:any = document.querySelectorAll('.fe-nav-btn');
    if(el){
      //  console.log(el)
     for(let i=0;i<el.length;i++){
       el[i].classList.remove('fe-nav-btn')
     }
    }
  }

}
