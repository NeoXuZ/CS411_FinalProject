import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Celebrity} from './celebrity';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const celebrities = [
      { id: 11, FirstName: 'Dr Nice', LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 12, FirstName: 'Narco' , LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 13, FirstName: 'Bombasto' , LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 14, FirstName: 'Celeritas' , LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 15, FirstName: 'Magneta',  LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23 },
      { id: 16, FirstName: 'RubberMan' ,  LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 17, FirstName: 'Dynama', LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23 },
      { id: 18, FirstName: 'Dr IQ' , LastName: 'Zhang', Gender: 'Male', Height: 186, Weight: 180, Age: 23},
      { id: 19, FirstName: 'Magma', LastName: 'Zhang',  Gender: 'Male', Height: 186, Weight: 180, Age: 23 },
      { id: 20, FirstName: 'Tornado', LastName: 'Zhang',  Gender: 'Male', Height: 186, Weight: 180, Age: 23 }
    ];
    return {celebrities};
  }

  genId(celebrities: Celebrity[]): number {
    return celebrities.length > 0 ? Math.max(...celebrities.map(celebrity => celebrity.id)) + 1 : 11;
  }
}
