import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

// Barrel rolling is used to reduce number of import statements
// Path aliases are defined in tsconfig.base.json file to improve readability also (e.g. @fdz/components @fdz/models etc)
import { 
  FdzAddFundFormComponent,
  FdzButtonComponent,
  FdzContentContainerComponent,
  FdzFooterComponent,
  FdzFundComponent,
  FdzFundCardComponent,
  FdzFundPillComponent,
  FdzFundProgressComponent,
  FdzFundsComponent,
  FdzHeaderComponent,
  FdzHomeComponent,
  FdzIconComponent,
  FdzLoadingComponent,
  FdzLogoComponent,
  FdzMessageComponent,
  FdzModalComponent,
  FdzTabsComponent
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
    FdzFundPillComponent,
    FdzFundProgressComponent,
    FdzFundsComponent,
    FdzHeaderComponent,
    FdzHomeComponent,
    FdzIconComponent,
    FdzLoadingComponent,
    FdzLogoComponent,
    FdzModalComponent,
    FdzMessageComponent,
    FdzTabsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
