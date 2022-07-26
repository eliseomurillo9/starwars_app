import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-index-vehicles',
  templateUrl: './index-vehicles.component.html',
  styleUrls: ['./index-vehicles.component.scss']
})
export class IndexVehiclesComponent implements OnInit {
  vehicles: any = [];
  vehiclesList: any = [];
  pagesCount: number = 0;
  nPage: number = 1

  constructor(private http: HttpClient) { }

   async ngOnInit(): Promise<void> {
    await this.getPageCount();
    this.getVehicles();
  }

  async getPageCount(): Promise<void>{
    return new Promise((resolve) => {
      this.http.get("https://swapi.dev/api/vehicles/?page=1").subscribe((data: any) =>{
      this.pagesCount = data.count;
      
      resolve()
    })
    
    })
  }

  @Output() sendVehicleInfo = new EventEmitter<any>();

  vehicleSelected(vehicleSelected: any){
    this.sendVehicleInfo.emit(vehicleSelected)
  }

  getVehicles(){
    this.http.get(`https://swapi.dev/api/vehicles/?page=${this.nPage}`).subscribe((data: any) =>{
      console.log(data.next);
      
    for (let i = 1; i <= Math.ceil(this.pagesCount/10); i++) {
      this.nPage = i
      this.vehicles = this.vehicles.concat(data.results)
      this.vehiclesList = this.vehiclesList.concat(data.results)
    }
    })    
  };

  filterVehicles(prix: any){
    let vehiclePrix = prix.target.value;
    this.vehicles = this.vehiclesList
    
    if (vehiclePrix === '1') {
      this.vehicles = this.vehicles.filter((vehicle: any) => vehicle.cost_in_credits <= 10000);
      this.pagesCount = this.vehicles.length;
    }
    if (vehiclePrix === '2') {
      this.vehicles = this.vehicles.filter((vehicle: any) => vehicle.cost_in_credits > 10000 && vehicle.cost_in_credits <= 100000);
      this.pagesCount = this.vehicles.length;
    }
    if (vehiclePrix === '3') {
      this.vehicles = this.vehicles.filter((vehicle: any) => vehicle.cost_in_credits > 100000);
      this.pagesCount = this.vehicles.length
    }
    if (vehiclePrix === 'unknown') {
      this.vehicles = this.vehicles.filter((vehicle: any) => vehicle.cost_in_credits === "unknown");
      this.pagesCount = this.vehicles.length
    }
    
  }
}
