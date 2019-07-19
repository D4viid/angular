import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styles: []
})

// Formulaire côté TS
export class CreateRoomComponent implements OnInit {
  pictures: Array<any> = [
    { id: 'Pegase.jpg', name: 'Pegase' },
    { id: 'Thalie.jpg', name: 'Thalie' },
    { id: 'Thalie.jpg', name: 'Thalie' },
    { id: 'Persee.jpg', name: 'Persee' }
  ];

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.min(0)
    ]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.formRoom.valid) {
      const room = this.formRoom.value as RoomModel;

      this.serv.insert(room).subscribe(
        (data) => {
          this.snack.open(`salle ${data.name} id ${data.id}`, 'OK',
            { duration: 2300, verticalPosition: 'top' });
        },
        (err) => {
          console.warn(err);
        }
      )
    }
  }

}
