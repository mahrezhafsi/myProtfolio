import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';

import { ProjectService } from '../_service/project.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{
  project = {} as Project[];
  
  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Hafsi Mahrez - Portfolio');

}ngOnInit(): void {
  this.project = this.projectService.GetProjects();
}
}
