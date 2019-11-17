import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { YoutubeService } from 'src/app/services/youtube.service';
import { VideoComponent } from './video.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  videos:any[] = [];

  videoSel:any;

  animal: string;
  name: string;




  constructor(public _yts:YoutubeService, public dialog: MatDialog) {
    this._yts.getVideos()
            .subscribe( videos =>{
              console.log(videos);
              this.videos= videos;
            });
  }

  openDialog(video:any): void {

    this.videoSel= video;


    const dialogRef = this.dialog.open(VideoComponent, {
      width: '450px',
      data: {name: this.videoSel.title, idVideo: this.videoSel.resourceId.videoId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.videoSel.title);

    });
  }

  ngOnInit() {
  }

}
