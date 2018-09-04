import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { TrainingData } from '../../interfaces/admin';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public gettrainedData: any = [];
  public userData: string = "";
  public bookdata: any = [];
  public trainedData: any;
  public trainedArticles: any;
  public Databook: any = [];
  public count: number = 0;
  public counting: any = [];
  public userDataLength: number;
  public noArticleDatabook: any = [];

  constructor(private adminService: AdminService, private _router: Router) { }


  getTrainBookData() {
    this.adminService.getTrainedData().subscribe((res) => {
      this.gettrainedData = res;
      this.trainedData = this.gettrainedData[4].trainedData.split(" ")
      this.trainedArticles = this.gettrainedData[4].trainedArticles.split(" ")
    });
    //this.trainedData = this.gettrainedData[0].trainedData.split(" ")
  }

  Solvation() {
    var userData1 = this.userData.split(" ");
    this.userDataLength = userData1.length;
    for (var i = 0; i < userData1.length; i++) {
      for (var j = 0; j < this.trainedData.length; j++) {
        if (userData1[i] == this.trainedData[j])
          this.count = this.count + 1;
      }
    }
    this.contentEvaluation();
  }

  contentEvaluation() {
    if (this.count > 0) {
      alert("you are upset dont worry we will provide best solutions from famous books")
      this.problemSolving();
    }
    else {
      alert("you are happy still if u need any suggestions wait")
    }
  }

  getBookData() {
    this.adminService.getBookData().subscribe((res) => {
      this.bookdata = res;
      for (var i = 0; i < this.bookdata.length; i++) {
        this.Databook[i] = this.bookdata[i]
      }
    });
  }

  problemSolving() {
    var userData1 = this.userData.split(" ");
    var userData2 = this.removeArticles(userData1);
    var userData3 = userData2.split(" ")
    for (var i = 0; i < this.Databook.length; i++) {
      this.counting[i] = 0
      var split = this.Databook[i].noArticlebookdata.split(" ")
      for (var k = 0; k < userData2.length; k++) {
        for (var j = 0; j < split.length; j++) {
          if (userData3[k] == split[j]) {
            this.counting[i] = this.counting[i] + 1;
          }
        }
      }
    }
    this.display()
  }

  removeArticles(data) {
    var data = data;
    var count = 0;
    var dummystring = ""
    var trainedArticles = this.trainedArticles;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < trainedArticles.length; j++) {
        if (data[i] === this.trainedArticles[j]) {
          count = count + 1;
        }
      }
      if (count > 0) {
        count = 0;
      }
      else {
        dummystring = dummystring + " " + data[i];
      }
    }
    return dummystring;
  }

  display() {
    console.log(this.counting)
    alert(JSON.stringify(this.bookdata[6]))
  }
  logout() {
    this._router.navigate(['/']);
  }

  ngOnInit() {
    this.getTrainBookData();
    this.getBookData()
  }

}
