import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

export class Song {
  constructor(
    public id: number,
    public title: string,
    public artist: string,
    public genre: string,
    public album: string,
    public lyric: string,
    public image: string
  ){}
}

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  song: Song
  id: number

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.song = new Song(this.id,'','','','','','');
    if(this.id!=-1) {
      this.dataService.getSongById(this.id)
          .subscribe (
            data => this.song = data
          )
    }

  }

  saveSong() {
    if(this.id == -1) {
      this.dataService.saveSong(this.song)
          .subscribe (
            data => {
              this.router.navigate(['tabs/home'])
            }
          )
    } else {
      this.dataService.updateSong(this.song)
          .subscribe (
            data => {
              this.router.navigate(['tabs/home'])
            }
          )
    }
  }

}
