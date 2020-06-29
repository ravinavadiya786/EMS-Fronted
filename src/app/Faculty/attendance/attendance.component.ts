import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  readonly url = 'https://cooing-famous-iguanacolossus.glitch.me/Faculty/Attendance';

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  progress = '';
  videoWidth = 0;
  videoHeight = 0;
  isopen: boolean = false;
  isshow: boolean = false;
  data: any;
  showcanavs: boolean = false;
  courses: any = []
  division: any = []
  standards: any = []
  is_submtted = false
  isCollapsed = true

  constraints = {
    video: {
      facingMode: "environment",
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };
  constructor(private renderer: Renderer2, private http: HttpClient, private toast: ToastrService) { }

  attecndaceform: FormGroup = new FormGroup({
    Course_ID: new FormControl('', Validators.required),
    Std_ID: new FormControl('', Validators.required),
    Division_ID: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Course").subscribe((data: any) => this.courses = data)
    this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Standard").subscribe((data: any) => this.standards = data)
    this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division").subscribe((data: any) => this.division = data)
  }

  startCamera() {
    this.isopen = true;
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
      this.toast.error('Sorry, camera not available.');
    }
  }
  get getformvalue() {
    return this.attecndaceform.controls
  }
  handleError(error) {
    this.toast.error('Error: ', error);
  }

  postdata() {
    this.is_submtted = true
    if (this.attecndaceform.invalid) {
      return
    }
    this.isCollapsed = false
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  base64ToBlob(base64, mime) {
    mime = mime || '';
    // tslint:disable-next-line: no-var-keyword
    var sliceSize = 1024;
    let byteChars = window.atob(base64);
    let byteArrays = [];

    for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
      let slice = byteChars.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mime });
  }


  capture() {
    this.isshow = true;
    this.showcanavs = true;
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    const img = this.canvas.nativeElement.toDataURL("image/png");
    const base64ImageContent = img.replace(/^data:image\/(png|jpg);base64,/, "");
    const blob = this.base64ToBlob(base64ImageContent, 'image/png');

    this.postrequest(blob)

  }

  postrequest(img) {
    const formData = new FormData();
    formData.append('picture', img);
    formData.append('data', this.attecndaceform.value);

    this.http.post(this.url, formData).subscribe((data: any) => {
      console.log('data', data)
      this.toast.clear()
      data.Success.map(ele => {
        this.toast.success('', ele, {
          closeButton: true,
          timeOut: 0
        });
      })
      // {"Success":["Navadiya Rajkumar Babubhai"],"Found":1}
      this.toast.info('', `Total Face ${data.Success.length} Is Found And ${data.Found} Students Are Presents`, {
        closeButton: true,
        timeOut: 0
      });
      this.isshow = false;
      this.isopen = false;
    })


  }

  changefile(e) {
    this.isshow = true;
    this.postrequest(e.target.files[0])
  }


}
export const routedComponents = [AttendanceComponent];
