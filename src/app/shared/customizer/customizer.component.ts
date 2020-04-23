import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { LayoutService } from "../services/layout.service";
import { ConfigService } from "../services/config.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.component.html",
  styleUrls: ["./customizer.component.scss"]
})
export class CustomizerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("customizer") customizer: ElementRef;

  options = {
    direction: "ltr",
    bgColor: "black",
    transparentColor: "",
    bgImage: "assets/img/sidebar-bg/01.jpg",
    bgImageDisplay: true,
    compactMenu: false,
    sidebarSize: "sidebar-md",
    layout: "Light"
  };
  size = "sidebar-md";
  isOpen = true;
  public config: any = {};
  layoutSub: Subscription;
  // isBgImageDisplay = true;
  selectedBgColor: string = "black";
  // selectedBgImage: string = "assets/img/sidebar-bg/01.jpg";
  selectedTLBgColor: string = "";
  selectedTLBgImage: string = "";

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private layoutService: LayoutService,
    private configService: ConfigService
  ) {
    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            this.selectedBgColor = options.bgColor;
          }
        }
      }
    );
  }

  @Output() directionEvent = new EventEmitter<Object>();

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.options.sidebarSize = this.config.layout.sidebar.size;
      this.size = this.config.layout.sidebar.size;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.config.layout.dir) {
        this.options.direction = this.config.layout.dir;
      }

      if (this.config.layout.variant) {
        this.options.layout = this.config.layout.variant;
      }


      if (
        this.config.layout.sidebar.backgroundColor &&
        this.config.layout.sidebar.backgroundColor != ""
      ) {
        this.options.bgColor = this.config.layout.sidebar.backgroundColor;
        this.selectedBgColor = this.config.layout.sidebar.backgroundColor;
      } else {
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
      }

      if (this.config.layout.sidebar.backgroundImage != undefined) {
        this.options.bgImageDisplay = this.config.layout.sidebar.backgroundImage;

      }

      if (this.config.layout.sidebar.backgroundImageURL) {
        this.options.bgImage = this.config.layout.sidebar.backgroundImageURL;

      }

      if (this.options.layout === "Transparent") {
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        this.options.bgImageDisplay = false;
        this.selectedTLBgColor = "";


        if (this.config.layout.sidebar.backgroundColor) {

        } else {
          this.options.bgColor = "black";
          this.selectedBgColor = "black";
          this.selectedBgColor = "";
          this.selectedTLBgColor = "";
          this.options.transparentColor = "bg-glass-1";
        }
      }
    }, 0);
  }
  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  sendOptions() {
    this.directionEvent.emit(this.options);
    this.layoutService.emitChange(this.options);
  }

  // bgImageDisplay(e) {
  //   if (e.target.checked) {
  //     this.options.bgImageDisplay = true;
  //     this.isBgImageDisplay = true;
  //   } else {
  //     this.options.bgImageDisplay = false;
  //     this.isBgImageDisplay = false;
  //   }
  //   //emit event to FUll Layout
  //   this.layoutService.emitCustomizerChange(this.options);
  // }

  // toggleCompactMenu(e) {
  //   if (e.target.checked) {
  //     this.options.compactMenu = true;
  //   } else {
  //     this.options.compactMenu = false;
  //   }
  //   //emit event to FUll Layout
  //   this.layoutService.emitCustomizerChange(this.options);
  // }

  // changeSidebarWidth(value) {
  //   this.options.sidebarSize = value;
  //   this.size = value;
  //   //emit event to FUll Layout
  //   this.layoutService.emitCustomizerChange(this.options);
  // }

  onLightLayout() {
    this.options.layout = "Light";
    this.options.bgColor = "man-of-steel";
    this.selectedBgColor = "man-of-steel";


    //emit event to FUll Layout
    this.layoutService.emitCustomizerChange(this.options);
  }

  onDarkLayout() {
    this.options.layout = "Dark";
    this.options.bgColor = "black";
    this.selectedBgColor = "black";

    //emit event to FUll Layout
    this.layoutService.emitCustomizerChange(this.options);
  }

  onTransparentLayout() {
    this.options.layout = "Transparent";
    this.options.bgColor = "black";
    this.selectedBgColor = "black";
    this.options.bgImageDisplay = false;
    this.selectedBgColor = "";
    this.selectedTLBgColor = "";
    this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
    this.options.transparentColor = "bg-glass-1";

    //emit event to FUll Layout
    this.layoutService.emitCustomizerChange(this.options);
  }

  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, "open");
      this.isOpen = true;
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, "open");
    this.isOpen = false;
  }

  changeSidebarBgColor(color) {
    this.selectedBgColor = color;
    this.selectedTLBgColor = "";
    this.options.bgColor = color;

    //emit event to FUll Layout
    this.layoutService.emitCustomizerChange(this.options);
  }

  // changeSidebarBgImage(url) {
  //   this.selectedBgImage = url;
  //   this.selectedTLBgImage = "";

  //   //emit event to FUll Layout
  //   this.options.bgImage = url;
  //   if (this.isBgImageDisplay) {
  //     this.options.bgImageDisplay = true;
  //   }
  //   //emit event to FUll Layout
  //   this.layoutService.emitCustomizerChange(this.options);
  // }

  changeSidebarTLBgColor(color) {
    this.selectedBgColor = "";
    this.selectedTLBgColor = color;
    this.selectedTLBgImage = "";
    this.options.transparentColor = color;
    this.options.bgImageDisplay = false;

    //emit event to FUll Layout

    this.layoutService.emitCustomizerChange(this.options);
  }

  // changeSidebarTLBgImage(url, color) {
  //   this.selectedTLBgColor = "";
  //   this.selectedTLBgImage = url;
  //   this.options.transparentColor = color;
  //   this.options.bgImageDisplay = false;

  //   //emit event to FUll Layout

  //   this.layoutService.emitCustomizerChange(this.options);
  // }
}
