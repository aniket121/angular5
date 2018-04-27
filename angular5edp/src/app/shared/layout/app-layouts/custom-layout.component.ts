import { Component, OnInit } from '@angular/core';
import {FadeZoomInTop} from "../../animations/fade-zoom-in-top.decorator";

@FadeZoomInTop()
@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styles: []
})
export class CustomLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
