import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Barrel rolling is used to reduce number of import statements
// Path aliases are defined in tsconfig.base.json file to improve readability also (e.g. @fdz/components @fdz/models etc)
import { 
  FdzAddFundFormComponent,
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
  FdzIconComponent,
  FdzLogoComponent,
  FdzModalComponent
} from '@fdz/components';

@NgModule({
  declarations: [
    FdzAddFundFormComponent,
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
    FdzIconComponent,
    FdzLogoComponent,
    FdzModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
