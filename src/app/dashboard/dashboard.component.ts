import { Component, OnInit } from '@angular/core';
import { CelebrityService } from '../celebrity.service';
import { Celebrity } from '../celebrity';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private celebrityService: CelebrityService) { }
  celebrities: Celebrity[];
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.celebrityService.getCelebrities()
      .subscribe(celebrities => this.celebrities = celebrities.slice(0, 4));
  }
}
