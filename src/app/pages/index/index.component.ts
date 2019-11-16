import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  videos:any[] = [];

  constructor(public _yts:YoutubeService) {
    this._yts.getVideos()
            .subscribe( videos =>{
              console.log(videos);
              this.videos= videos;
            });

  }

  ngOnInit() {
  }

}
