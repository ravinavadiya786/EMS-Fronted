import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiSwitchModule } from 'ngx-ui-switch'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from './shared/auth/token-interceptor.service';


import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser"

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from "./app.component";
import { FullLayoutComponent } from "./Main_layout/full-layout.component";

// import { DragulaService } from "ng2-dragula";
import { AuthService } from "./shared/auth/auth.service";
import { SidebarconfigService } from './shared/sidebar/sidebarconfig.service'
import { AuthGuard } from "./shared/auth/auth-guard.service";
import { MySwitchComponent } from './switch/switch.component';
import { loginComponent } from './login/login.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};


@NgModule({
  declarations: [AppComponent, FullLayoutComponent, MySwitchComponent, loginComponent],
  imports: [
    BrowserAnimationsModule,
    UiSwitchModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    AuthService,
    SidebarconfigService,
    AuthGuard,
    // DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [MySwitchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
