import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

import { ConfigService } from "app/shared/services/config.service";
import { DOCUMENT } from "@angular/common";
import { LayoutService } from "app/shared/services/layout.service";
import { Subscription } from "rxjs";


@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html",
  styleUrls: ["./full-layout.component.scss"]
})
export class FullLayoutComponent implements OnInit, AfterViewInit, OnDestroy {


  options = {
    bgColor: "black",
  };
  hideSidebar: boolean;
  layoutSub: Subscription;
  bgColor = "black";

  public config: any = {};

  constructor(
    private elementRef: ElementRef,
    private layoutService: LayoutService,
    private configService: ConfigService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    //event emitter call from customizer
    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            this.bgColor = options.bgColor;
          }

          if (options.layout === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.removeClass(this.document.body, "bg-hibiscus");
            this.renderer.removeClass(this.document.body, "bg-purple-pizzazz");
            this.renderer.removeClass(this.document.body, "bg-blue-lagoon");
            this.renderer.removeClass(this.document.body, "bg-electric-violet");
            this.renderer.removeClass(this.document.body, "bg-portage");
            this.renderer.removeClass(this.document.body, "bg-tundora");
            this.renderer.removeClass(this.document.body, "bg-glass-1");
            this.renderer.removeClass(this.document.body, "bg-glass-2");
            this.renderer.removeClass(this.document.body, "bg-glass-3");
            this.renderer.removeClass(this.document.body, "bg-glass-4");
          } else if (options.layout === "Dark") {
            if (this.document.body.classList.contains("layout-transparent")) {
              this.renderer.removeClass(
                this.document.body,
                "layout-transparent"
              );
              this.renderer.removeClass(this.document.body, "bg-hibiscus");
              this.renderer.removeClass(
                this.document.body,
                "bg-purple-pizzazz"
              );
              this.renderer.removeClass(this.document.body, "bg-blue-lagoon");
              this.renderer.removeClass(
                this.document.body,
                "bg-electric-violet"
              );
              this.renderer.removeClass(this.document.body, "bg-portage");
              this.renderer.removeClass(this.document.body, "bg-tundora");
              this.renderer.removeClass(this.document.body, "bg-glass-1");
              this.renderer.removeClass(this.document.body, "bg-glass-2");
              this.renderer.removeClass(this.document.body, "bg-glass-3");
              this.renderer.removeClass(this.document.body, "bg-glass-4");

              this.renderer.addClass(this.document.body, "layout-dark");
            } else {
              this.renderer.addClass(this.document.body, "layout-dark");
            }
          } else if (options.layout === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "bg-glass-1");
          }

          if (options.transparentColor) {
            this.renderer.removeClass(this.document.body, "bg-hibiscus");
            this.renderer.removeClass(this.document.body, "bg-purple-pizzazz");
            this.renderer.removeClass(this.document.body, "bg-blue-lagoon");
            this.renderer.removeClass(this.document.body, "bg-electric-violet");
            this.renderer.removeClass(this.document.body, "bg-portage");
            this.renderer.removeClass(this.document.body, "bg-tundora");
            this.renderer.removeClass(this.document.body, "bg-glass-1");
            this.renderer.removeClass(this.document.body, "bg-glass-2");
            this.renderer.removeClass(this.document.body, "bg-glass-3");
            this.renderer.removeClass(this.document.body, "bg-glass-4");
            this.renderer.addClass(
              this.document.body,
              options.transparentColor
            );
          }
        }
      }
    );
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.bgColor = this.config.layout.sidebar.backgroundColor;

    if (this.config.layout.variant === "Transparent") {
      if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
        this.bgColor = "bg-glass-1";
      }
    } else {
      if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
        this.bgColor = "black";
      }
    }

    this.options.bgColor = this.bgColor;

    this.layoutService.emitCustomizerChange(this.options);

  }

  ngAfterViewInit() {
    setTimeout(() => {
  

      if (this.config.layout.variant === "Dark") {
        this.renderer.addClass(this.document.body, "layout-dark");
      } else if (this.config.layout.variant === "Transparent") {
        this.renderer.addClass(this.document.body, "layout-dark");
        this.renderer.addClass(this.document.body, "layout-transparent");
        if (this.config.layout.sidebar.backgroundColor) {
          this.renderer.addClass(
            this.document.body,
            this.config.layout.sidebar.backgroundColor
          );
        } else {
          this.renderer.addClass(this.document.body, "bg-glass-1");
        }
        this.bgColor = "black";
        this.options.bgColor = "black";
      }
    }, 0);
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  getOptions($event): void {
    this.options = $event;
  }
}
