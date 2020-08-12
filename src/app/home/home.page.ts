import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  songs =[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(){
    this.refreshSongs();
  }

  refreshSongs(){
    this.dataService.getSongs().subscribe(
      response => {
        this.songs = response;
      },
      error => {
        console.log(error);
      }
    )

  }

  deleteSong(id){
    this.dataService.deleteSong(id).subscribe(
      response => {
        this.refreshSongs();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateSong(id){
    this.router.navigate([`song`,id]);
  }

  addSong(){
    this.router.navigate(['song', -1]);
  }

}
