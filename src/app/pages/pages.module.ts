import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YoutubeService } from '../services/youtube.service';
import { VideoComponent } from './index/video.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { VideoYoutubePipe } from '../pipes/video-youtube.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    PageNotFoundComponent,
    VideoComponent,
    VideoYoutubePipe
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  exports:[

  ],
  entryComponents: [
    VideoComponent
  ],
  providers:[
    YoutubeService
  ]
})
export class PagesModule { }
