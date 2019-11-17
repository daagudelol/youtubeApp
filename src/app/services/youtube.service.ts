import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpParams} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apiKey:string = "AIzaSyDHXVjE-q9FZ2Y-jGhgDBavGCWAVz4244I";
  private playList: string = "UUVyRiMvfUNMA1UPlDPzG5Ow";
  private nextPageTocken: string ="";

  constructor(public http:HttpClient) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItems`;
    let params = new HttpParams().set('part', 'snippet').set('maxResults', '10').set('playlistId', this.playList ).set('key', this.apiKey);

    return this.http.get(url, { params }).pipe(map((res: any) =>{
        //console.log(res)
        this.nextPageTocken = res.nextPageToken;
        let videos:any[]=[];
        for(let video of res.items){
          let snippet = video.snippet;
          videos.push( snippet );
        }

        return videos;

      })
    );


  };
}
