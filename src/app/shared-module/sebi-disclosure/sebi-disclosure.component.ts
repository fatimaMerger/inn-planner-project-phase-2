import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sebi-disclosure',
  templateUrl: './sebi-disclosure.component.html',
  styleUrls: ['./sebi-disclosure.component.scss']
})
export class SEBIDisclosureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData:any = [
    {
      key: '1',
      Pending_as_of_last_month: 0,
      received_from: 'Total',
      received: 0,
      resolved: 0,
      total_pending: 0,
      pending_three_months: 0,
      avg_res_time: 0,
    },
    {
      key: '2',
      Pending_as_of_last_month: 0,
      received_from: 'Directly from investors',
      received: 0,
      resolved: 0,
      total_pending: 0,
      pending_three_months:0,
      avg_res_time:0,
    },
    {
      key: '3',
      Pending_as_of_last_month: 0,
      received_from: 'SEBI - SCORES',
      received:0,
      resolved:0,
      total_pending:0,
      pending_three_months:0,
      avg_res_time:0,
    },
    {
      key: '4',
      Pending_as_of_last_month: 0,
      received_from: 'Other sources',
      received:0,
      resolved:0,
      total_pending:0,
      pending_three_months:0,
      avg_res_time:0,
    },
  ];



  monthly_trend:any = [
    {
      key: '1',
      month: 'Total',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '2',
      month: 'Apr 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '3',
      month: 'May 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '4',
      month: 'Jun 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '5',
      month: 'Jul 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '6',
      month: 'Aug 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '7',
      month: 'Sep 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '8',
      month: 'Oct 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '9',
      month: 'Nov 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '10',
      month: 'Dec 2023',
      carried_fwd:'0',
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '11',
      month: 'Jan 2024',
      carried_fwd:'-',
      received: '-',
      resolved: '-',
      pending: '-',
    },
    {
      key: '12',
      month: 'Feb 2024',
      carried_fwd:'-',
      received: '-',
      resolved: '-',
      pending: '-',
    },
    {
      key: '13',
      month: 'Mar 2024',
      carried_fwd:'-',
      received: '-',
      resolved: '-',
      pending: '-',
    },
  ];

  annual_trend: any = [
    {
      key: '1',
      year: '2023-24',
      carried_fwd: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '2',
      year: '2024-25',
      carried_fwd: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '3',
      year: '2025-26',
      carried_fwd: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      key: '4',
      year: '2026-27',
      carried_fwd: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    }
  ];

  disclosures: any = [
    {
      key: '1',
      financial_year: 'FY 2023-24',
      compliance_audit_status: '',
      remarks: 'n/a',
    },
    {
      key: '2',
      financial_year: 'FY 2024-25',
      compliance_audit_status: '',
      remarks: 'n/a',
    },
  ]

}
