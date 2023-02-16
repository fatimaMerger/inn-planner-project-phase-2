import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface charter {
  key: string;
  name: string;
}
@Component({
  selector: 'app-admin-investor',
  templateUrl: './admin-investor.component.html',
  styleUrls: ['./admin-investor.component.scss']
})
export class AdminInvestorComponent implements OnInit {
  isVisible2=false;
  updateInvestorForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
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
    if (!this.  updateInvestorForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this. updateInvestorForm.controls) {
      if (i) {
        this. updateInvestorForm.controls[i].markAsDirty();
        this. updateInvestorForm.controls[i].markAsTouched();
        this. updateInvestorForm.controls[i].setErrors({ newerror: true });
        this. updateInvestorForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }

  listOfData: charter[] = [
    {
      key: '1',
      name: 'To enter into an agreement with the client providing all details including fee details, aspect of Conflict-of-interest disclosure and maintaining confidentiality of information.',
    },
    {
      key: '2',
      name: 'To do a proper and unbiased risk-profiling and suitability assessment of the client.',
    },
    {
      key: '3',
      name: 'To obtain registration with Know Your Client Registration Agency (KRA) and Central Know Your Customer Registry (CKYC).',
    },
    {
      key: '4',
      name: 'To conduct audit annually.',
    },
    {
      key: '5',
      name: 'To disclose the status of complaints in its website.',
    },
    {
      key: '5',
      name: 'To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone numbers and associated SEBI regional/local Office details in its website.',
    },
    {
      key: '6',
      name:'To employ only qualified and certified employees.'
    },
    {
      key: '7',
      name:'To deal with clients only from official number.'
    },
    {
      key: '7',
      name:'To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to advice has taken place.'
    },
  ];

  listOfData2: charter[] = [
    {
      key: '1',
      name: 'Sharing of agreement copy.',
    },
    {
      key: '2',
      name: 'Completing KYC of clients.',
    },
   
  ];
 
 
  listOfData3:charter[]=[
    {
      key: '1',
      name: 'To provide full disclosure about its business, affiliations, compensation in the agreement.',
    },
    {
      key: '2',
      name: 'To not access clients accounts or holdings for offering advice.',
    },
    {
      key: '3',
      name: 'To disclose the risk profile to the client.',
    },
  ];

  listOfData4:charter[]=[
    {
      key: '1',
      name: 'In case of any grievance / complaint, an investor should approach the concerned Investment Adviser and shall ensure that the grievance is resolved within 30 days.',
    },
    {
      key: '2',
      name: 'If the investors complaintis not redressed satisfactorily, one may lodge a complaint with SEBI on SEBIs SCORES portal which is a centralized web-based complaints redressalsystem. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates trackingthe status of thecomplaint.',
    },
    {
      key: '3',
      name: 'With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A,G Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051..',
    },
  ];

   
  listOfData5:charter[]=[
    {
      key: '1',
      name: 'Always deal with SEBI registered Investment Advisers.',
    },
    {
      key: '2',
      name: 'Ensure that the Investment Adviser has a valid registration certificate.',
    },
    {
      key: '3',
      name: 'Check for SEBI registration number. Please refer to the list of all SEBI registered Investment Advisers which is available on SEBI website in the following link.',
    },
    {
      key: '4',
      name: 'Pay only advisory fees to your Investment Adviser. Make payments of advisory fees through banking channels only and maintain duly signed receipts mentioning the details of your payments.',
    },
    {
      key: '5',
      name: 'Always ask for your risk profiling before accepting investment advice. Insist that Investment Adviser provides advisory strictly on the basis of your risk profiling and take into account available investment alternatives.',
    },
    {
      key: '6',
      name: 'Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.',
    },
    {
      key: '7',
      name: 'Assess the risk-return profile of the investment as well as the liquidity and safety aspects before making investments.',
    },
    {
      key: '8',
      name: 'Assess the risk-return profile of the investment as well as the liquidity and safety aspects before making investmentsInsist on getting the terms and conditions in writing duly signed and stamped. Read these terms and conditions carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any Investment Adviser.',
    },
    {
      key: '9',
      name: 'Be vigilant in your transactions.',
    },
    {
      key: '10',
      name: 'Approach the appropriate authorities for redressal of your doubts / grievances.',
    },
    {
      key: '11',
      name: 'Inform SEBI about Investment Advisers offering assuredor guaranteed returns.',
    },
  ];

  listOfData6:charter[]=[
    {
      key: '1',
      name: 'Dont fall for stock tips offered under the pretext of investment advice.',
    },
    {
      key: '2',
      name: 'Do not provide funds for investment to the Investment Adviser.',
    },
    {
      key: '3',
      name: 'Dont fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers. Dont let greed overcome rational investment decisions.',
    },
    {
      key: '4',
      name: 'Dont fall prey to luring advertisements or market rumors.',
    },
    {
      key: '5',
      name: 'Avoid doing transactions only on the basis of phone calls or messages from any Investment adviser or its representatives.',
    },
    {
      key: '6',
      name: 'Dont take decisions just because of repeated messages and calls by Investment Advisers.',
    },
    {
      key: '7',
      name: 'Dont rush into making investments that do not match your risk-taking appetite and investment goals.',
    },
    {
      key: '8',
      name: 'Do not share login credential and password of your trading and demat accounts with the Investment Adviser.',
    },
  ];

  listOfData7:charter[]=[
    {
      key: '1',
      name: 'In case of any dispute, either judicial or quasi-judicial the same will be subject to the exclusive jurisdiction of the courts in Mumbai. These terms shall be construed in accordance with the laws prevalent in India and are subject to SEBI guidelines, circulars, press releases or notifications that may be issued by SEBI from time to time or the Government of India, to regulate the activities of RIAs (Registered Investment Advisors).',
    },
   
  ];



}
