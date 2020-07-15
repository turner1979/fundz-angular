import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Barrel rolling is used to reduce number of import statements
// Path aliases are defined in tsconfig.base.json file to improve readability also (e.g. @fdz/components @fdz/models etc)
import { 
  FdzButtonComponent,
  FdzContentContainerComponent,
  FdzFooterComponent,
  FdzFundComponent,
  FdzFundCardComponent,
  FdzFundDetailComponent, 
  FdzFundPillComponent,
  FdzFundProgressComponent,
  FdzFundsComponent,
  FdzHeaderComponent,
  FdzHomeComponent,
  FdzLogoComponent
} from '@fdz/components';

@NgModule({
  declarations: [
    AppComponent,
    FdzButtonComponent,
    FdzContentContainerComponent,
    FdzFooterComponent,
    FdzFundComponent,
    FdzFundCardComponent,
    FdzFundDetailComponent,
    FdzFundPillComponent,
    FdzFundProgressComponent,
    FdzFundsComponent,
    FdzHeaderComponent,
    FdzHomeComponent,
    FdzLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
