import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor() { }
  panels = [
    {
      active: false,
      name: 'Are you Robo advisors?',
      answer: 'No, we are not Robo advisors.',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'What is your annual fee?',
      answer: `First Year – 11,000 +18% GST (if applicable)
Renewal Fee – 5,000 +18% GST (if applicable)- Renewal fee will increase by 10% after every 2 years.
`
    },
    {
      active: false,
      disabled: false,
      name: 'Is the annual fee per person or per couple?',
      answer: 'It is per couple (including dependent children and dependent parents). However, if you want to work with us separately from your spouse or partner, it is two separate fees. '
    },
    {
      active: false,
      disabled: false,
      name: 'Is your annual fee really this small? ',
      answer: 'Yes, our annual fee is really that small. We don’t generate referral fees, assets under management charges, commissions, or any other fee.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why your annual fee is so low?',
      answer: 'We want to change the concept of financial planning in India and want to help people that don’t have much extra money. Also, we realized that if we use technology efficiently it doesn’t take much time to provide professional, personal guidance and we could service many clients and still make a profit.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do you offer any discount?',
      answer: 'No, we are already giving you the services at a much lower cost than our counterparts. There is no further scope for discount.'
    },
    {
      active: false,
      disabled: false,
      name: 'Is Renewal mandatory or voluntary?',
      answer: 'It is voluntary. There is no compulsion for renewal.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I renew after a gap of 2-3 years?',
      answer: 'Yes, you can renew after 2-3 years. The fee would be charged as a new client.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why pay for advice that I could get for free?',
      answer: 'Free advice is more expensive than Fee advice. If you’re not paying for it; you are the product.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why pay for advice that I could research and do it myself?',
      answer: `Charles Portis once said,” You must pay for everything in this world one way and another. There is nothing free except the Grace of God.” You either pay with time or money. 
 
If you have enough time to research and do it yourself, please do. We would be happy to help you- Please refer to our calculators and blog, if you want to learn more.
`
    }
  ];
  buyerPanels1 = [
    {
      active: false,
      name: 'Do I have to share my secure information (bank account details, MF folio number, insurance policy number) with you?',
      answer: 'No, we do not want your secure information like bank account details, MF folio number, insurance policy number, etc.',
      disabled: false
    },
    {
      active: false,
      name: 'Do I have to link any of my accounts to PLNR?',
      answer: 'No, you do not have to link any of your accounts to PLNR.',
      disabled: false
    },
    {
      active: false,
      name: 'Can I just send my data in excel and would you be able to put it together?',
      answer: 'No, you will have to fill in all the information by yourself after signing in to our portal. We do not have access to the client’s side of the portal.',
      disabled: false
      },
    {
      active: false,
      name: 'Is my information secure with PLNR?',
      answer: 'Yes, we keep your data very confidential and we do not share it with any third party',
      disabled: false
    },
  ]

  generalPanels = [
    {
      active: false,
      disabled: false,
      name: 'Do you visit clients?',
      answer: 'No, we do not visit clients. '
    },
    {
      active: false,
      disabled: false,
      name: 'Can I come and visit your office?',
      answer: 'Yes, you can visit us at our office with a prior appointment.'
    },
    {
      active: false,
      disabled: false,
      name: 'What is the language used for communication?',
      answer: 'We are comfortable in Hindi and English.'
    },
    {
      active: false,
      disabled: false,
      name: 'What is your preferred mode of communication?',
      answer: 'E-mail, phone, WhatsApp, and video conferencing.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I schedule a meeting time with you which is convenient for me?',
      answer: 'Likely yes but no guarantee on this. Most of our clients schedule meetings with us that are just fine for their schedule. It might depend on how soon you want to meet and what time zone you are in! You might have to meet with us later at night or in the morning or during your work day.'
    },
  ]

  financial_planning_panels = [
    {
      active: false,
      disabled: false,
      name: 'What is covered in the financial plan?',
      answer: 'Please refer services page for the same.'
    },
    {
      active: false,
      disabled: false,
      name: 'How long does it take to make a financial plan?',
      answer: 'It takes around 10-15 days if you are quick to provide us with the required information during the creation of the financial plan.'
    },
    {
      active: false,
      disabled: false,
      name: 'What happens after you deliver the plan?',
      answer: 'If you need help in implementing these recommendations, we would extend our support to do so. We will review the plan after 6 months to check if you have implemented the plan.'
    },
    {
      active: false,
      disabled: false,
      name: 'How many times can I contact you after you deliver the plan since the engagement is for 1 year?',
      answer: 'There is no limit on how often you can contact us throughout the year. But please do not abuse it. Our success depends on clients appreciating our business model and time. Do not reach out to us every other week on why stock markets are going up or down, what should I do now? Do not send every new product which has come into the market to analyze.'
    },
    {
      active: false,
      disabled: false,
      name: 'How soon do you respond to emails? For some',
      answer: 'Normally we respond to emails in 2 working days'
    },
    {
      active: false,
      disabled: false,
      name: 'Do you offer direct equity or stock advice?',
      answer: 'No, on the equity side, we suggest only equity mutual funds.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do you offer tax advice?',
      answer: 'Yes, we suggest tax-efficient instruments for investments but we do not provide tax filing services. You need to consult your CA for any complex taxation issues.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I include my parents’ savings in the same plan?',
      answer: 'Yes, if you are planning to use their savings for your financial goals, otherwise no as their risk profile would be different from yours.'
    },
    {
      active: false,
      disabled: false,
      name: 'What happens if my life situation changes?',
      answer: 'Financial planning is a process that keeps changing as per the life situation. You can seek our advice provided the engagement is active.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do I have to invest in products recommended by you?',
      answer: 'No, you can invest in whatever instruments you want. We give investment advice based on your goals but where you invest is your own decision.'
    }
  ]
  miscellanious_panels = [
  {
      active: false,
      disabled: false,
      name: 'What kind of clients are not a good match for PLNR?',
      answer: `There are several types of clients who are not a good match for PLNR. If you are always interested in meeting in person i.e. every time, we give you some suggestions and you want to meet in person, you are not a good match.
If you are looking for a complicated portfolio like alternative investments, cryptocurrency, PMS, etc. we do not offer these.
If you are coming to us expecting just higher returns from your investments, we are not the right match. We have the solution for your need but not your greed.
`
    },
    {
      active: false,
      disabled: false,
      name: 'Can I send you the documents on my investments?',
      answer: 'No, unless we ask for the same to review it. Also, please do not send your lengthy excels (if you have any) to us for review.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do you suggest investing via a platform?',
      answer: 'Though we give suggestions, you are free to choose any platform you are comfortable with.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I talk to some of your clients to check about your services?',
      answer: 'No, we respect our clients` privacy. Though our clients love to refer us and you can check their testimonials here'
    },
    
  ]


  ngOnInit(): void {
  }

  changePanel(panel:any) {
    panel.active = !panel.active;
  }

}
