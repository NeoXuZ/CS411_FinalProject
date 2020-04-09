import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../celebrity';
import { CelebrityService } from '../celebrity.service';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-celebritylist',
  templateUrl: './celebritylist.component.html',
  styleUrls: ['./celebritylist.component.css']
})
export class CelebritylistComponent implements OnInit {
  celebrities: Celebrity[];
  initialSettings;
  celebrityFormGroup = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Gender: new FormControl(''),
    Height: new FormControl(''),
    Weight: new FormControl(''),
    Age: new FormControl('')
  });
  constructor(private celebrityService: CelebrityService) { }
  ngOnInit() {
    this.getCelebrities();
  }


  getCelebrities(): void {
    this.celebrityService.getCelebrities()
      .subscribe(celebrities => {
      this.celebrities = celebrities; console.log(celebrities);
      this.initialSettings = this.celebrities;
      });
  }


  add(newcelebrity): void {
    const inputcelebrity = ({
      FirstName: this.celebrityFormGroup.get('FirstName').value,
      LastName: this.celebrityFormGroup.get('LastName').value,
      Gender: this.celebrityFormGroup.get('Gender').value,
      Height: this.celebrityFormGroup.get('Height').value,
      Weight: this.celebrityFormGroup.get('Weight').value,
      Age: this.celebrityFormGroup.get('Age').value,
    });
    inputcelebrity.FirstName = inputcelebrity.FirstName.trim();
    inputcelebrity.LastName = inputcelebrity.LastName.trim();
    this.celebrityService.addCelebrity(inputcelebrity as Celebrity)
      .subscribe(newdata => {
        this.celebrities.push(newdata);
      });
  }
  delete(celebrity: Celebrity): void {
    this.celebrities = this.celebrities.filter(h => h !== celebrity);
    this.celebrityService.deleteCelebrity(celebrity).subscribe();
  }
  reset() {
    this.celebrities = this.initialSettings;
  }
  comfirm() {
    this.celebrityService.updateCelebrities(this.celebrities);
  }
}
