import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.services';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './room-top-five.component.html',
  styles: []
})
export class RoomTopFiveComponent implements OnInit {
  // private servRoom: RoomService;

  rooms: Array<RoomModel>;

  // On ne peut récupérer les services que via le constructeur
  constructor(private serv: RoomService) {
    // this.servRoom = serv;
  }

  ngOnInit() {
    this.serv.getTopFive().subscribe(
      (data) => {
        this.rooms = data;
      }
    );
    // this.serv.getRooms().subscribe((data) => { this.rooms = data });
  }

} 