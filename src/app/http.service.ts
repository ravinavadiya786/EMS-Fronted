import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  enable = true;
  constructor(private http: HttpClient) { }
  readonly url = 'https://college-managment-system.herokuapp.com'

  // getdata(url2: string) {
  //  return this.http.get(this.url+url2).subscribe( (data:any) => {
  //     return data 
  //   } )
  // }
  // // /Admin/Standard
  // postdata(url2 : string,data:any){
  //   this.http.post(this.url+url2,data).subscribe(data => {
  //       if(data)
  //       {

  //       }
  //   })
  // }

  update_active({ link, id, value }) {

  }
  // this.http.get("https://college-managment-system.herokuapp.com/Admin/Standard").subscribe( (data:any) => {
  //   this.tbldata=data.map((value:any) => {
  //        return {
  //           '_id' : value._id,
  //           'Name':  value.Name,
  //           'Course_Name' : value.Course_ID.Course_Name,
  //           'Duration' : value.Course_ID.Duration,
  //           'Created_On': value.Created_On.substr(0,10),
  //           'Is_Active': value.Is_Active,
  //       }
  //   })
  // } )
}
