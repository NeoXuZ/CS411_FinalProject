import { Component, OnInit } from '@angular/core';
import { CelebrityService } from '../celebrity.service';
import { Celebrity } from '../celebrity';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-celebrity-detail',
  templateUrl: './celebrity-detail.component.html',
  styleUrls: ['./celebrity-detail.component.css']
})
export class CelebrityDetailComponent implements OnInit {
  celebrity: Celebrity;
  celebrityFormGroup: FormGroup;
  initialSettings: FormGroup;
  getCelebrity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.celebrityService.getCelebrity(id)
      .subscribe(celebrity => {
      this.celebrity = celebrity;
      console.log(this.celebrity.FirstName);
      this.celebrityFormGroup = new FormGroup({
        FirstName: new FormControl(this.celebrity.FirstName),
        LastName: new FormControl(this.celebrity.LastName),
        Gender: new FormControl(this.celebrity.Gender),
        Height: new FormControl(this.celebrity.Height),
        Weight: new FormControl(this.celebrity.Weight),
        Age: new FormControl(this.celebrity.Age)
      });
      this.initialSettings = new FormGroup({
        FirstName: new FormControl(this.celebrity.FirstName),
        LastName: new FormControl(this.celebrity.LastName),
        Gender: new FormControl(this.celebrity.Gender),
        Height: new FormControl(this.celebrity.Height),
        Weight: new FormControl(this.celebrity.Weight),
        Age: new FormControl(this.celebrity.Age)
      });
      });
  }

  goBack(): void {
    this.location.back();
  }
  Save(): void {
    this.celebrity.Age = this.celebrityFormGroup.get('Age').value;
    this.celebrity.Gender = this.celebrityFormGroup.get('Gender').value;
    this.celebrity.Weight = this.celebrityFormGroup.get('Weight').value;
    this.celebrity.Height = this.celebrityFormGroup.get('Height').value;
    this.celebrity.FirstName = this.celebrityFormGroup.get('FirstName').value;
    this.celebrity.LastName = this.celebrityFormGroup.get('LastName').value;
    this.celebrityService.updateCelebrity(this.celebrity)
      .subscribe(() => this.goBack());
  }
  constructor(private celebrityService: CelebrityService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getCelebrity();
  }
  Reset() {
   this.celebrityFormGroup = this.initialSettings;
  }
}
