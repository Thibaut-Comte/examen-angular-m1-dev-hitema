import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-weather',
  templateUrl: './icon-weather.component.html',
  styleUrls: ['./icon-weather.component.css']
})
export class IconWeatherComponent implements OnInit {

  @Input() taille: "forecast";
  @Input() weather: string;
  
  ngOnInit() {
  }

}