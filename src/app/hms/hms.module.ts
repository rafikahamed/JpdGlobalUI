import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserIdleModule } from 'angular-user-idle';
import { UiModule } from 'app/ui/ui.module';
import { HmsComponent } from 'app/hms/hms.component';
import { HomeComponent } from 'app/hms/home/home.component';
import { LoginComponent } from 'app/hms/login/login.component';
import { SignUpComponent }from 'app/hms/signup/signup.component';
import { SignUpService } from 'app/hms/service/signUp.service';
import { LoginService } from 'app/hms/service/login.service';
import { UserService } from 'app/hms/service/user.service';
import { ParcelService } from 'app/hms/service/parcel.service';
import { AdminService } from 'app/hms/service/admin.service';
import { ParcelComponent } from './parcel/parcel.component';
import { BasComponent } from './bas/bas.component';
import { FrightComponent } from './fright/fright.component';
import { ReverseComponent } from './reverse/reverse.component';
import { DepotComponent } from './depot/depot.component';
import { GstComponent } from './gst/gst.component';
import { TermsServiceComponent } from './terms-services/terms-services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.componet';
import { JpdServiceComponent } from './jpd-service/jpd-service.component';
import { PriceComponent } from './price/price.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ArnRegistrationComponent } from './arn-register/arn-register.component';
import { ArnRegistrationAdminComponent } from './arn-register-admin/arn-register-admin.component';
import { ArnRegistrationUserComponent } from './arn-register-user/arn-register-user.component';
import { PolicyComponent } from './policy/policy.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    // Time out - after idle, how long to wait before logout
    // Idle -  maximum user Idle time in seconds we can accept
    UserIdleModule.forRoot({idle: 300, timeout: 30, ping: 1}),
    RouterModule.forRoot([
          { path: "", redirectTo: "home", pathMatch: "full" },
          { path: "login", component: LoginComponent },
          { path: "signUp", component: SignUpComponent },
          { path: "home", component: HomeComponent },
          { path: "Main", component: ParcelComponent},
          { path: "services", component: JpdServiceComponent},
          { path: "bas-services", component: BasComponent},
          { path: "fright-services", component: FrightComponent},
          { path: "reverse-services", component: ReverseComponent},
          { path: "depot-services", component: DepotComponent},
          { path: "resource-gst", component: GstComponent},
          { path: "pricing", component: PriceComponent},
          { path: "contact",  component: ContactComponent},
          { path: "about", component: AboutComponent},
          { path: "jpd/arn-registration", component: ArnRegistrationComponent},
          { path: "arn-registration/admin", component: ArnRegistrationAdminComponent},
          { path: "arn-registration/user", component: ArnRegistrationUserComponent},
          { path: "resource-termsAndServices", component: TermsServiceComponent},
          { path: "resource-policy", component: PolicyComponent},
          { path: "resource-article", component: ArticleComponent}
    ], { useHash: true }),
    UiModule
  ],
  declarations: [
    HmsComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ParcelComponent,
    BasComponent,
    FrightComponent,
    ReverseComponent,
    DepotComponent,
    GstComponent,
    ContactComponent,
    AboutComponent,
    JpdServiceComponent,
    PriceComponent,
    ArnRegistrationComponent,
    ArnRegistrationAdminComponent,
    ArnRegistrationUserComponent,
    TermsServiceComponent,
    PolicyComponent,
    ArticleComponent
  ],
  entryComponents: [
    
  ],
  providers: [
    { provide: 'Window', useValue: window },
    SignUpService,
    LoginService,
    UserService,
    ParcelService,
    AdminService
  ],
  bootstrap: [
    HmsComponent
  ]
})
export class HmsModule {
  constructor() {
 
  }
}