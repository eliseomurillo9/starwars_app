import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ResolvedReflectiveFactory, resolveForwardRef } from '@angular/core';
import {Output, EventEmitter} from '@angular/core'
import { Event } from '@angular/router';
import { PlanetDetails } from '../planet-details';
import { Planets } from '../planets';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent implements OnInit {
  count!: number;
  planets: Planets[] = [];
  savedPlanets: Planets[] = [];
  pages!: number;
  showResult: boolean = false

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getCount();
    this.getPlanets();
  }

  async getCount(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get<PlanetDetails>('https://swapi.dev/api/planets/')
        .subscribe((count: PlanetDetails) => {
          this.count = count.count;
          resolve()
        })
    })

  }
  @Output() sendPlanetData = new EventEmitter<Planets>();

  planetSelected(selected: Planets){
    this.sendPlanetData.emit(selected)
  }
  getPlanets() {
    for (let index = 1; index <= (this.count / 10); index++) {

      this.http.get<PlanetDetails>(`https://swapi.dev/api/planets/?page=${index}`).subscribe((data: PlanetDetails) => {
          this.planets = this.planets.concat(data.results);
          this.savedPlanets = this.savedPlanets.concat(data.results);
        });
    }

    
  }

  populationFilter(event: any) {
    let populationFilter = event.target.value
    
    console.log(populationFilter);
    this.planets = this.savedPlanets;
    if (populationFilter === '1') {
      this.planets = this.planets.filter((pop: Planets) => Number(pop.population) <= 100000);
    }
    if(populationFilter === "2"){
      this.planets = this.planets.filter((pop: Planets) => Number(pop.population) > 100000 && Number(pop.population) <= 100000000);
    }
    if( populationFilter === "3"){
      this.planets = this.planets.filter((pop: Planets) => Number(pop.population) > 100000000);
    }
    if( populationFilter === "unknown"){
      this.planets = this.planets.filter((pop: Planets) => pop.population == "unknown");
    }

    this.count = this.planets.length
  }

};





