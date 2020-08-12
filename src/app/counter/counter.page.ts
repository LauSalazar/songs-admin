import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  counterTab: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.counterTab = this.route.snapshot.params['counterTab'];
  }

}
