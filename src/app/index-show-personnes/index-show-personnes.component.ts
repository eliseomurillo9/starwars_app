import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personnages } from '../personnages';

@Component({
  selector: 'app-index-show-personnes',
  templateUrl: './index-show-personnes.component.html',
  styleUrls: ['./index-show-personnes.component.scss']
})
export class IndexShowPersonnesComponent implements OnInit {
  personnageInfo: any = {};
  vehiclesLinks: Personnages[] = [];
  vehiclesType: Personnages[] = [];
  vehicleStock: boolean = false
  messageError: string = ""

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  receivedPersonInfo(personnage: any) {
    this.personnageInfo = personnage;


    this.http.get<Personnages>(`${this.personnageInfo.homeworld}`)
      .subscribe((planet: Personnages) => {

        this.personnageInfo.homeworld = planet.name
      });

    this.getVehicles();

  };

  getVehicles() {
    this.vehiclesLinks = this.personnageInfo.vehicles;
    console.log(this.vehiclesLinks);
    

    if (this.vehiclesLinks.length === 0) {
      this.messageError = 'Aucun véhicule recensé'
      this.vehicleStock = false
      console.log(this.messageError);

    } else {

      for (let i = 0; i < + this.vehiclesLinks.length; i++) {
        let link = this.vehiclesLinks[i]

        this.http.get<Personnages>(`${link}`)
          .subscribe((vehicle: Personnages) => {
            this.vehiclesType = this.vehiclesType.concat(vehicle)
            console.log(this.vehiclesType);

          })
          this.vehicleStock = true
      }
    }
  };
}

