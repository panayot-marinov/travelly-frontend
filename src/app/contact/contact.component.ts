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
      center: { lat: -34.397, lng: 150.644 }, // Specify your initial map center
      zoom: 8 // Specify the initial zoom level
    };

    const mapContainer = this.renderer.selectRootElement('#google-map'); // Use Renderer2 to get the element
    const map = new google.maps.Map(mapContainer, mapOptions);
  }
}

