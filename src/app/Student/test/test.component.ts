import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import dateformat from 'dateformat';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})

export class TestComponent implements OnInit {

  AlllTestArr: Array<any> = [];
  TestArr: Array<any> = [];
  Test_Names: Array<any> = [];
  Test_Results: Array<any>;
  Coulmn: any;
  public isCollapsed = false;

  timer: number = 0;
  is_Start: boolean = false;
  CurrentQNo = 0;
  WrongAnsCnt = 0;
  Score = 0;
  Test_Master_ID: string;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  fetchData() {
    this.http.get("http://localhost:8050/Student/Test").subscribe((data: any) => {
      this.AlllTestArr = data.Test_Questions
      this.Test_Names = data.Test_Names
      this.Test_Results = data.Test_Results.map(item => {
        return {
          Score: item.Score,
          WrongAnsCnt: item.WrongAnsCnt,
          Test_Name: item.Test_Master_ID.Test_Name,
          Sub_Name: item.Test_Master_ID.Subject_ID.Sub_Name,
          Faculty_Name: item.Test_Master_ID.Faculty_ID.Name,
          Completed_Date: dateformat(new Date(item.Completed_Date), 'dddd, mmmm dS, yyyy, h:MM:ss TT')
        }
      })

      this.Coulmn = {
        attr: {
          class: "table table-responsive"
        },
        actions: {
          add: false,
          edit: false,
          delete: false
        },
        columns: {
          WrongAnsCnt: {
            title: 'Wrong Answer',
          },
          Score: {
            title: 'Score',
          },
          Test_Name: {
            title: 'Test Name',
          },
          Sub_Name: {
            title: 'Subject Name',
          },
          Faculty_Name: {
            title: 'Faculty'
          },
          Completed_Date: {
            title: 'Date'
          },

        }
      }

    })
  }

  ngOnInit(): void {
    this.fetchData()
  }


  finishedTest() {
    this.is_Start = false
    this.CurrentQNo = 0
    this.timer = 0;
    if (this.Score === 0) this.WrongAnsCnt = this.AlllTestArr.length

    this.http.post("http://localhost:8050/Student/Test", { Score: this.Score, Test_Master_ID: this.Test_Master_ID, WrongAnsCnt: this.WrongAnsCnt }).subscribe((data: any) => {
      if (data.Success) {
        this.http.put("http://localhost:8050/Faculty/Test", { _id: this.Test_Master_ID, Is_Finished: true }).subscribe((data: any) => {
          this.fetchData()
          if (data.Success) {
            swal.fire({
              title: 'Your Test Is Succesfully Finished',
              type: 'success',
              html:
                `<div class="card" style="box-shadow: none !important;letter-spacing: 0.05rem;">
                  <div class="card-content">
                    <div class="d-inline-flex mt-1 text-info">
                      <h3 class="float-left text-center p-2 text-bold-00" style="font-size: 25px;">Test Questions Score ${this.Score} / ${this.AlllTestArr.length} </h3>
                      <i class="float-right ft-award p-2 font-large-1"></i>
                    </div>
                    
                    <h3 class="text-center mt-3 text-danger">Wrong Answer ${this.WrongAnsCnt} </h3>
                    <h3 class="text-center mt-3 text-success ">Correct Answer ${this.Score} </h3>
                  </div>
                </div>
                `,
            })
            return
          } else {
            this.toast.error(data.Error);
          }
        })
      } else {
        this.toast.error(data.Error);
      }
    })
  }


  StartTest(_id: string) {
    this.Test_Master_ID = _id
    this.Score = 0
    this.WrongAnsCnt = 0
    this.TestArr = this.AlllTestArr.filter(item => item.Test_Master_ID?._id == _id)
    this.is_Start = true
    this.startCountdown(1)
  }

  NextQuestion(Ansindex: number, correctAns: number) {
    this.CurrentQNo++;

    if (Ansindex == correctAns) {
      this.Score++;
    } else {
      this.WrongAnsCnt++
    }

    if (this.CurrentQNo == this.AlllTestArr.length) this.finishedTest()

  }

  startCountdown(seconds: number) {
    let counter = seconds * 60;


    let interval = setInterval(() => {
      this.timer = counter
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        this.finishedTest()
      };
    }, 1000);
  };
}
