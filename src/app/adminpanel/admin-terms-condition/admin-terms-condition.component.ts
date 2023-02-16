import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface terms {
  key: string;
  name: string;
}
@Component({
  selector: 'app-admin-terms-condition',
  templateUrl: './admin-terms-condition.component.html',
  styleUrls: ['./admin-terms-condition.component.scss']
})
export class AdminTermsConditionComponent implements OnInit {

  isVisible2=false;
   updatetermsForm: FormGroup;
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
    if (!this.   updatetermsForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.  updatetermsForm.controls) {
      if (i) {
        this.  updatetermsForm.controls[i].markAsDirty();
        this.  updatetermsForm.controls[i].markAsTouched();
        this.  updatetermsForm.controls[i].setErrors({ newerror: true });
        this.  updatetermsForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }

  listOfData: terms[] = [
    {
      key: '1',
      name: 'The security of personal information about you is our priority. We receive and store both personal and non-personal information about you when you visit and/or use our website, www.plnr.in or our iOS or Android mobile applications. We protect this information by maintaining physical, electronic, and procedural safeguards that meet applicable laws. We train our employees in the proper handling of personal information. This Privacy Policy lays down the norms for that govern the use, disclosure and sharing of information about the registered users of Plnr. “Plnr”, “Plnr.in” and “www.plnr.in” are properties owned by PLNR Advisory Services (“PLNR”).',
    },
   
  ];

  listOfData2: terms[] = [
    {
      key: '1',
      name: ' Your name, contact number and e-mail that is collected for signing up on Plnr.',
    },
    {
      key: '2',
      name: 'Information provided by you, for using the services provided by us, such as your mobile number, e-mail, password, date of birth, residential address, gender, marital status, Permanent Account Number (PAN) and your bank account details.',
    },
    {
      key: '3',
      name: 'You may be required to provide certain additional information depending on the services that you wish to use, at your discretion.',
    },
    {
      key: '4',
      name: ' We may also retrieve information from centralized Know Your Customer (KYC) databases such as CVL KRA, NDML KRA, CERSAI (CKYC) etc such as your KYC status and, fathers name, occupation, identity and address proof documents.',
    },
    {
      key: '5',
      name: 'For use of some services, we may be required to perform a Know Your Customer registration check and register/update your KYC if not already registered/updated. In such cases, we will require you to provide your KYC information as detailed in i) and ii) above, upload documentary evidence of your identity, address and financial details and record a live video interaction through the device in use that clearly shows your face to establish liveliness and verify that its you who is accessing our application.',
    },
    {
      key: '6',
      name: 'During the use of our services, we will collect information about your transaction history, transaction status and other transaction details.',
    },
    {
      key: '7',
      name: 'During the use of our services, we will collect information about your transaction history, transaction status and other transaction details.',
    },
    {
      key: '8',
      name: 'When you interact with our customer support systems including through chat bots, email, live interaction with an agent either over chat or on call, we record these interactions.',
    },
  ];
 
 
  listOfData3:terms[]=[
    {
      key: '1',
      name: ' When you visit our website, we collect and store information to enable us to provide an online experience that matches your device. The information collected includes the type and address of the device you use, the browser and its version, the operating system and its version you are using and the website from which you came to the Plnr Website',
    },
    {
      key: '2',
      name: 'When you install and access our mobile application or access our website through a mobile device, we collect information including your location, IP address, the make, model and the unique identifier of the device in use, the browser and its version, the operating system installed on the device and its version.',
    },
    {
      key: '3',
      name: 'When you browse our site or receive an e-mail from us, we and the companies we work with, use cookies and/or pixel tags to collect information and store your online preferences. Cookies are widely used and most browsers are set up to accept them automatically. If you would prefer, you can choose to not accept cookies by disabling same through browser settings.',
    },
    {
      key: '4',
      name: 'Cookies and pixel tags help us improve your online experience. This comprises, inter alia, your response to any of our e-mails, the time and duration of your visit to our site and pages you viewed while on our site.',
    },
    {
      key: '5',
      name: 'We may also supplement the information we collect with information we receive from other companies. For example, we may use marketing segments developed by us or other companies to customize certain services to your local area and provide relevant Plnr offers tailored to you.',
    },
  ];

  listOfData4: terms[] = [
    {
      key: '1',
      name: 'Information collected is stored on our servers, log files or storage systems owned by us or by third parties specifically providing such storage services.',
    },
   
  ];
   
  listOfData5:terms[]=[
    {
      key: '1',
      name: 'Facilitating various services provided by us, the availing of each of which are at your discretion, including i. Setting up of your account and facilitating the processing your transactions through BSEStarMF, our transaction partner for Mutual Fund services. ii. Setting up of your fixed deposit accounts with NBFC or with banks, as the case may be. iii. Setting up and facilitating the processing of your transactions through our partners for international equities, domestic equities,insurance. iv. To enable us to complete your registration with us and/or with them and to process any transaction requests that you authorise, maintain a record of your transactions and holdings, generate and send reminders, alerts, notifications to you for transactions, upcoming funds transfers etc.',
    },
    {
      key: '2',
      name: 'Checking/Updating/Registering your KYC in centralized KYC databases such NDML KRA, CERSAI (CKYC).',
    },
    {
      key: '3',
      name: 'Resolving your queries, concerns and to provide you with support in the case of any issues during the use of our services and of those provided by our partners.',
    },
    {
      key: '4',
      name: 'Informing you about any offers relating to products and services including sharing of marketing material with you.',
    },
    {
      key: '5',
      name: 'Streamlining and customizing your experience while using our mobile application or while accessing our services through the mobile browser or our website.',
    },
    {
      key: '6',
      name: 'Informing you over email or on call about the progress of and issues with, if any, pertaining to the transactions initiated by you and the resolution thereof or relating to the services availed by you.',
    },
    {
      key: '7',
      name: 'To prepare analyses, reports and tools for your use such as the portfolio snapshot capital gains report, consolidated transaction history, ELSS tax reports etc.',
    },
    {
      key: '8',
      name: 'Facilitate the transfer of funds from your bank account to the service provider by validating your bank account and redirecting you the payment gateway provided by the service provider(s).',
    },
    {
      key: '9',
      name: 'To track, analyze and maintain information about your use of our application to enable us to maintain and preserve information of your current state and flow progress.',
    },
    {
      key: '10',
      name: 'To communicate with our partners with respect to their products and services that you may have availed through us.',
    },
    {
      key: '11',
      name: ' To enable our partners to communicate with you with respect to their products and services that you may have availed through us.',
    },
    {
      key: '12',
      name: 'We use the non-personal information provided by you and aggregated information for:  a. To improve your experience while using our website, mobile website or mobile application. b. For troubleshooting and identifying any bugs, operational issues, process bottlenecks, errors in the application and for analysing usage and activity trends and c. To prepare analyses, reports and tools for your use such as insights. d. To monitor, identify, resolve and prevent any security incidents, frauds, criminal activities, prohibited activities, non-compliance e. For research, design and development of the products and services offered by us. f. We may use aggregated information that does not identify you individually for better product design, research and for developing customized marketing offers either by us or any affiliated or unaffiliated third-party consultants or service providers.',
    },
  ];

  listOfData6:terms[]=[
    {
      key: '1',
      name: 'When we use third parties to provide services, we require them to protect the confidentiality of personal information about you that they receive from us. The information is disclosed on a need-to-know basis.',
    },
    {
      key: '2',
      name: 'We may use third party service providers to enable us in providing some services to you such as sending e-mail messages to you and tracking them on our behalf, collecting a fee for our services, and providing technical support that can contact you regarding an issue with any feature or functionality on our website.',
    },
    {
      key: '3',
      name: 'Information will be shared with select third parties such as our group companies, Asset Management Companies (AMC), Registrar and Transfer Agents, BSE Limited and affiliate companies, National Stock Exchange of India Limited, partners through whom we provide some of our services such as banks, financial institutions, credit information companies, entities registered under applicable laws with Securities Exchange Board of India, the Reserve Bank of India, Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI), KYC registration agencies (KRA), payment gateway providers, banks providing collection services in order to enable us to complete your registration with us and/or with them and to process any transaction requests that you authorise, maintain a record of your transactions and holdings, generate and send reminders, alerts, notifications to you for transactions, upcoming funds transfers etc.',
    },
    {
      key: '4',
      name: 'We also use third-party services such as Sentry, Mixpanel, Google tag manager, Google analytics etc that may collect information used to identify you.',
    },
    {
      key: '5',
      name: 'We will not share with, or make available, your personal information to any third party without your authorisation, except if we are specifically directed or mandated to do so under any Applicable Law, legal proceeding or directive by any administrative, judicial, quasi-judicial, statutory or regulatory body or any authority or agency of the Government.',
    },
  ];

  listOfData7:terms[]=[
    {
      key: '1',
      name: 'Registering for a service on our website requires the creation of a Login ID and Password by you to ensure the privacy and security of the information you provide. Your Login ID and Password are the primary means to access our services and website, and hence as a security feature, our website requires creation of a password that meets certain complex requirements. We recommend and require that your keep your Login ID and Password confidential. Further, we recommend that you change your password periodically. We shall not be responsible for any unauthorized access to your account if you share your Login ID and Password with anyone or as a consequence of a violation of this Privacy Policy or the Website’s Terms of Use.',
    },
    {
      key: '2',
      name: 'Every time you login to our website or mobile application, we use, inter alia, the latest authentication and encryption protocols (TLS 1.2) along with session time outs, firewalls to protect your account from unauthorised access. Your password information is not accessible to anyone including us and can only be changed/updated by you using a two-factor authentication process.',
    },
    {
      key: '3',
      name: 'We may offer the use of social logins or identity providers such as Google, Facebook etc. to enable you to conveniently create an account and register yourselves on our website. By enabling the use of these credentials, we offer you the convenience of not having to create and remember a fresh user ID and password. Such service, its availability and the privacy of your login information are governed by the terms and conditions of the respective service providers. Whilst we do take adequate measures to safeguard your information, we do not take responsibility of your information in case of a security breach at these service providers or in case you share your login information with anyone or in case your social media account was to get hacked. We require you to maintain adequate confidentiality of your social login information and use this facility after due consideration and with appropriate caution.',
    },
    {
      key: '4',
      name: 'When you provide us with your personal information either while setting up an account with us or later, it is kept maintained by the division that is responsible for your account management. You can view and/or update/edit this information by logging on to your account through our website, e-mailing us or calling customer service.',
    }, 
   
  ];
  listOfData8:terms[]=[
    {
      key: '1',
      name: 'When you create a login ID and password or sign-in to plnr, you are providing your consent to this Privacy Policy.Withdrawal of consent: Personal information collected will not be used for any purposes other than as mentioned herein. You may withdraw your consent for the use of the personal information at any time by deactivating your account. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal data conducted in reliance on lawful processing grounds other than consent. In the event you choose to withdraw your consent for collecting and processing your personal data, we will be unable to provide you with our products and services. Changes to the Privacy Policy: We reserve the right to unconditionally modify, change or update this Privacy Policy in part or its entirety at any point at our discretion without assigning any reason whatsoever. Update of this Privacy Policy shall be adequate notification of these changes, if any. We will date of last update of this Privacy Policy right the beginning of this document/web page. Further, the most update Privacy Policy and the date of last update of this Privacy Policy shall be available on https://plnr.in/privacy on the web and in the Privacy section of the mobile application.',
    }
  ];
  listOfData9:terms[]=[
    {
      key: '1',
      name: 'You may reach out to us for any queries with respect to this Privacy Policy through our Help section or by writing to support@plnr.in.We comply with the requirements of the Information Technology (Reasonable Security Practices And Procedures And Sensitive Personal Data Or Information) Rules, 2011. And for the purposes of this act, we have designated Ajay Pruthi as the Grievance Officer. The Grievance Officer may be reached by writing to support@plnr.in.',
    }
  ];

}
