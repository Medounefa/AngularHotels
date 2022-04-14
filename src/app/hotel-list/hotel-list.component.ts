import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotels';
import { registerLocaleData } from '@angular/common';
import LocalFr from '@angular/common/locales/fr';

registerLocaleData(LocalFr, 'fr')

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})


export class HotelListComponent implements OnInit {


  public title = "La liste des hotels"

  public hotels: IHotel[] = [
    {
      "hotelName": "Jardin",
      "hotelImg": "assets/img/jardin.jpg",
      "price": 12000
    },
    {
      "hotelName": "Novotel",
      "hotelImg": "assets/img/novotel.jpg",
      "price": 13000
    },
    {
      "hotelName": "Rdisson",
      "hotelImg": "assets/img/radisson.jpg",
      "price": 12000
    }
  ]
  public showBadge: boolean | undefined;


  private _hotelFilter = "mot";
  public filteredHotel: IHotel[] = [];

  ngOnInit(): void {
    this.filteredHotel = this.hotels;
    this.hotelFilter = ' ';
  }
  public afficherCacher(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelfilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filer: string) {
    this._hotelFilter = filer;
    this.filteredHotel = this.hotelfilter ? this.filterHotel(this.hotelfilter) : this.hotels;

  }

  private filterHotel(cataria: string) {
    cataria.toLowerCase;

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(cataria) != -1
    );
    return res;
  }



}
