import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  doSearch() {}

  doViewDataDetail() {
    this.router.navigate(['detail']);
  }
}
