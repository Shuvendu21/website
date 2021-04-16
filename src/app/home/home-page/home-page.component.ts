import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  header: {id: number,
  name: string,
  tagline: string,
  title: string,
  description: string
}[];
  config: any;

// constructor(private config: ConfigService) { }

   ngOnInit() {
  //   this.getPageData('pages', 9);
  }

  // getPageData(database: string, id?: number) {
  //   this.config.getSettings(database, id).subscribe(
  //     data => {
  //       this.header = data;
  //       console.log(this.header);
  //     }
  //   );
  // }

}
