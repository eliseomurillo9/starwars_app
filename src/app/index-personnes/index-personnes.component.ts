import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personnages } from '../personnages';
import { PersonnagesDetails } from '../personnages-details';

@Component({
  selector: 'app-index-personnes',
  templateUrl: './index-personnes.component.html',
  styleUrls: ['./index-personnes.component.scss']
})
export class IndexPersonnesComponent implements OnInit {

  @Output() sendPersonInfo = new EventEmitter<Personnages>();

  countPage: number = 0;
  personnages: Personnages[] = [];
  savedPersonnages: Personnages[] = [];
  nPage: number = 1;

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getPageCount();
    this.getPersonnage();
  }

  async getPageCount(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get<PersonnagesDetails>('https://swapi.dev/api/people/?page=1')
        .subscribe((data: PersonnagesDetails) => {
          this.countPage = data.count;

          resolve();
        })

    })
  };

  getPersonnage() {
    for (let i = 1; i <= Math.ceil(this.countPage/10); i++) {
      
    this.http.get<PersonnagesDetails>(`https://swapi.dev/api/people/?page=${i}`)
      .subscribe((data: PersonnagesDetails) => {
          this.personnages = this.personnages.concat(data.results);
          this.savedPersonnages = this.personnages.concat(data.results);

        })
      }

  };
  

  personnageFilter(event: any) {
    console.log(event.target.value);

    this.personnages = this.savedPersonnages

    if (event.target.value === '1') {
      this.personnages = this.personnages.filter((info: Personnages) => info.gender === "male")
      this.countPage = this.personnages.length
    }

    if (event.target.value === '2') {
      this.personnages = this.personnages.filter((info: Personnages) => info.gender === "female")
      this.countPage = this.personnages.length
    }

    if (event.target.value === '3') {
      this.personnages = this.personnages.filter((info: Personnages) => info.gender === "n/a")
      this.countPage = this.personnages.length
    }

    if (event.target.value === '4') {
      this.personnages = this.personnages.filter((info: Personnages) => info.gender === "unknown")
      this.countPage = this.personnages.length
    }

  };

  sendPersonnageInfo(personnage: Personnages) {
    this.sendPersonInfo.emit(personnage)
  }

}
