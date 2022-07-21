import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent implements OnInit {
  planets: any = [];
  planetUrl1 = this.http.get<any>('https://swapi.dev/api/planets/');
  planetUrl2 = this.http.get<any>('https://swapi.dev/api/planets/?page=2');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getPlanets()
    forkJoin([this.planetUrl1, this.planetUrl2]).subscribe(resultes => {
      console.log(resultes[0].results, resultes[1]);
      this.planets.push(resultes[0].results, resultes[1].results);
      console.log("hello", this.planets);
      
    })
   
  }
  // getPlanets() {
  //  this.http.get<any>('https://swapi.dev/api/planets/')
  //     .subscribe(planets => {
  //       this.planets = planets;

  //     })
  // }

  
}
