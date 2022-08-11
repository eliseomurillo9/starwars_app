import { Component, OnInit } from '@angular/core';
import { Planets } from '../planets';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {
  
  planetInfo!: Planets; 
  message: string = "Click sur une planete";
  constructor() { }

  ngOnInit(): void {
    
  }
 

  receivePlanetData(selectedPlanet: Planets){
    this.planetInfo = selectedPlanet;
  }
}
