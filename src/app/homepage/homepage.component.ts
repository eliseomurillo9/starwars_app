import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Planets } from '../planets';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  characters: any ;
  vehicles: any;
  planets: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCharacter();
    this.getVehicles();
    this.getPlanets()
  }

  getCharacter(){
    this.http.get<Planets>('https://swapi.dev/api/people/')
    .subscribe(characters => {
      this.characters = characters
      console.log(this.characters.count);
      
      })
   }

   getVehicles(){
    this.http.get<Planets>('https://swapi.dev/api/vehicles/')
    .subscribe(vehicles => {
      this.vehicles = vehicles
      })
   }

   getPlanets(){
    this.http.get<Planets>('https://swapi.dev/api/planets/')
    .subscribe(planets => {
      this.planets = planets
      console.log('hello');
      })
   }
}
