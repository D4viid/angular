import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.services';
import { RoomModel } from 'src/app/models/room.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: []
})
export class DetailRoomComponent implements OnInit {
  $obsRoom: Observable<RoomModel>;

  // On ne peut récupérer les services que via le constructeur
  constructor(private act: ActivatedRoute, private service: RoomService) { }

  ngOnInit() {
    const id = this.act.snapshot.params.id;

    this.$obsRoom = this.service.getRoomId(id);
  }

}
