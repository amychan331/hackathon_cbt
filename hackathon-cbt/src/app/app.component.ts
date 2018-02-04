import { Component, OnInit } from '@angular/core';

import * as jquery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
  	jQuery('.meow').on('click', function() {
  		console.log("KSDJFLKDSJ");
  	})
  }
}
