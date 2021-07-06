import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    vid = "https://www.youtube.com/embed/hmpCdmosbE8"
  
  constructor(public navCtrl: NavController, private dom: DomSanitizer) {

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  sanitizer(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }
}
