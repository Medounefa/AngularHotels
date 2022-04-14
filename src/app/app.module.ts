import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReservationHotelComponent } from './reservation-hotel/reservation-hotel.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HotelListComponent,
    ReservationHotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'hotel', component: HotelListComponent },
      { path: 'reservation', component: ReservationHotelComponent }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
