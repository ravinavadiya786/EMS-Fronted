import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";

import { SidebarconfigService } from './sidebarconfig.service';
// import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

import { ConfigService } from '../services/config.service';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit, OnDestroy {

  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  layoutSub: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private configService: ConfigService,
    private layoutService: LayoutService,
    private Sidebarconfig :SidebarconfigService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }

    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            if (options.bgColor === 'white') {
              this.logoUrl = 'assets/img/logo-dark.png';
            }
            else {
              this.logoUrl = 'assets/img/logo.png';
            }
          }

        }
      });

  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.menuItems = this.Sidebarconfig.GetRouteinfo();

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }

  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf("forms/ngx") !== -1)
      this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
  }
}
