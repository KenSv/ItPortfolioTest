import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';
import { Subscription } from 'rxjs';
import { Config } from '../../../config';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit, OnDestroy {
  private imgUrl = `https://api.unsplash.com/photos?client_id=${Config.clientId}&per_page=${Config.ItemsPerPage}&page=`;
  private loadSubscription: Subscription;
  private imageList = [];
  isLoading = false;
  totalItems = Config.totalPages * 10;
  private pageNum = 1;


  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.isLoading = true;
    this.loadSubscription = this.api.loadImage(`${this.imgUrl}${this.pageNum}`).subscribe(
      res => {
        console.log('Loading ...');
        this.imageList = [];
        res.map(item => {
          this.imageList.push(item.urls.small);
        });
      },
      err => {
        console.log('Error --> %o', err);
      },
      () => {
        this.isLoading = false;
        console.log('Load completed');
      }
    );
  }

  pageChanged(event: any): void {
    this.pageNum = event.page;
    this.loadImages();
  }

  ngOnDestroy() {
    this.loadSubscription.unsubscribe();
  }

}
