import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.scss']
})
export class EventGalleryComponent implements OnInit {


  constructor(private http: HttpClient) { }
  images = []
  formData: FormData = new FormData()

  fetchdata() {
    this.http.get("https://education.serverless.social/Admin/Event_Gallery").subscribe((data: any) => this.images = data)
  }

  ngOnInit(): void {
    this.fetchdata()
  }

  changefile(event) {
    this.formData.append("uploadedImage", event.target.files[0])
    this.http.post("https://education.serverless.social/Admin/Event_Gallery", this.formData).subscribe((data: any) => this.fetchdata())

  }
}
