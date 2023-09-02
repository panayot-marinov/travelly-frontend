import { Component, OnInit, AfterViewInit, Renderer2} from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadGoogleMap();
  }

  loadGoogleMap(): void {
    const mapOptions = {
      center: { lat: 42.6977, lng: 23.3219 },
      zoom: 11
    };

    const mapContainer = this.renderer.selectRootElement('#google-map');
    const map = new google.maps.Map(mapContainer, mapOptions);
  }
}

