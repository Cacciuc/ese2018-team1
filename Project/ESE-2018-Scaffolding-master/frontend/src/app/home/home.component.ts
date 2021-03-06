import { Component, OnInit } from '@angular/core';
import {Job} from '../job';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: Job[] = []; // contains last three jobs who were submitted (approved is not accounted)
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/job').subscribe((instances: any) => {
      this.jobs = instances.map((instance) => new Job(instance.id, instance.name, instance.description, instance.company_name, instance.wage, instance.job_start, instance.job_end, instance.percentage, instance.approved)).splice(-3, 3);
    });
  }

}
