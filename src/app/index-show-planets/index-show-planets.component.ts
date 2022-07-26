import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {
  
  planetInfo: any; 
  message: string = "Click sur une planete";
  constructor() { }

  ngOnInit(): void {
    
  }
 

  receivePlanetData(selectedPlanet: any){
    this.planetInfo = selectedPlanet;
  }
}
