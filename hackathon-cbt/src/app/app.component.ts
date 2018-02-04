import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    // For mobile view navigation dropdown
    $( ".fa-bars" ).click(function(e) {
      e.preventDefault();
      $(this).parent().next().toggle();
    });
    // CSS don't detect browser size change, so JS is use here
    $(window).resize(function() {
      if ($(window).width() > 812) {
        $("nav ul:first").css({"display": "inline-block"});
        $("nav li").css({"width": "auto"});
      } else {
        $("nav ul:first").css({"display": "none"});
        $("nav li").css({"width": "100%"});
      }
    });
  }
}
