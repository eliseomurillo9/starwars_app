import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-next-mission',
  templateUrl: './next-mission.component.html',
  styleUrls: ['./next-mission.component.scss']
})
export class NextMissionComponent implements OnInit {
  nextMissionForm!: any;
  missionList: any[] = [{ name: 'Doe', lastName: 'John', weigth: 67, suit: '../../assets/spacesuit2.7daedab8.jpeg' },
  { name: 'Jen', lastName: 'Kyle', weigth: 80, suit: '../../assets/spacesuit1.28f26112.jpg' }];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateNextMissionForm();
  }

  generateNextMissionForm() {
    this.nextMissionForm = this.fb.group({
      name: [''],
      lastName: [''],
      weigth: [],
      suit: ['']
    })
  };

  onSubmit() {
    const formValue = this.nextMissionForm.value;
    
    if (formValue.suit === '1') {
      formValue.suit = ["../../assets/spacesuit2.7daedab8.jpeg"]
    }
    if (formValue.suit === '2') {
      formValue.suit === ["../../assets/spacesuit1.28f26112.jpg"]
    }

    this.missionList.push(formValue)
    console.log(this.missionList);

  }

}
