import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Song } from 'src/app/song/song.page';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveSong(song){
    return this.httpClient.post(`${API_URL}/songs/saveSong`, song);
  }

  deleteSong(id){
    return this.httpClient.delete(`${API_URL}/songs/deleteSong/${id}`);
  }

  updateSong(song){
    return this.httpClient.put(`${API_URL}/songs/updateSong`, song);
  }

  getSongById(id){
    return this.httpClient.get<Song>(`${API_URL}/songs/getSongById/${id}`);
  }

  getSongs(){
    console.log('llega al service');
    return this.httpClient.get<Song[]>(`${API_URL}/songs/getSongs`);
  }

}
