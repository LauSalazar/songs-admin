import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  constructor(
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
  }

  public openWebView(): void {
    this.iab.create('https://www.google.com/','_self');
 }

}
