import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  characters: any;
  vehicles: any;
  planets: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCharacter();
    this.getVehicles();
    this.getPlanets()
  }

  getCharacter(){
    this.http.get<any>('https://swapi.dev/api/people/')
    .subscribe(characters => {
      this.characters = characters
      
      })
   }

   getVehicles(){
    this.http.get<any>('https://swapi.dev/api/vehicles/')
    .subscribe(vehicles => {
      this.vehicles = vehicles
      })
   }

   getPlanets(){
    this.http.get<any>('https://swapi.dev/api/planets/')
    .subscribe(planets => {
      this.planets = planets
      console.log('hello');
      })
   }
}
