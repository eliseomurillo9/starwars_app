import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-vehicles',
  templateUrl: './index-show-vehicles.component.html',
  styleUrls: ['./index-show-vehicles.component.scss']
})
export class IndexShowVehiclesComponent implements OnInit {
  vehicleInfo: any;
  message: string = "Click sur une vehicle"
  constructor() { }

  ngOnInit(): void {
  }

  receivedVehicleInfo(vehicleSelected: any){
    this.vehicleInfo = vehicleSelected;
    console.log(this.vehicleInfo);
    
  }
}
