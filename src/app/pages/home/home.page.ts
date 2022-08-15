import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { NewsApiService } from 'src/app/services/news-api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private NewsApiService: NewsApiService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadTopHeadlines()
  }


  async loadTopHeadlines(){

    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.NewsApiService.getTopHeadlines().subscribe( res =>{
      loading.dismiss();
      console.log(res)
      this.articles.push(...res.articles)
      console.log(this.articles)

      // event?.target.complete();

      // if(event) {
      //   event.target.disabled = res.total_pages === this.currentPage;
      // }
    });
  }

}
