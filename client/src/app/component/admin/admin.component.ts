import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { TrainingData } from '../../interfaces/admin';
import { BookData } from '../../interfaces/admin2';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  public trainBookString: string;
  public BookDataString: BookData;
  public trained: TrainingData;
  public gettrainedData: any = [];

  constructor(private adminService: AdminService, private _router: Router) {
    this.trained = {
      trainedData: "",
      trainedArticles: ""
    }

    this.BookDataString = {
      bookdata: "",
      noArticlebookdata: "",
      Rating: ""
    }
  }

  addBookData() {
    console.log("In add book data")
    var dummybookdataString = "";
    var count = 0;
    var bookdata = this.BookDataString.bookdata;
    var dummybookdata = bookdata.split(" ");
    
    var trainedArticles = this.gettrainedData[4].trainedArticles;
    var dummytrainedArticles = trainedArticles.split(" ");

    for (var i = 0; i < dummybookdata.length; i++) {
      for (var j = 0; j < dummytrainedArticles.length; j++) {
        if (dummybookdata[i] === dummytrainedArticles[j]) {
          count = count+1;
          console.log(dummybookdata[i])
        }
      }
      if(count>0) {
        console.log("In if")
        count = 0;
      }
      else {
        console.log("In else")
        dummybookdataString =  dummybookdataString +  " " + dummybookdata[i] ;
      }
    }
    console.log("After")
   console.log(dummybookdataString);
   console.log("BEFORE")
    console.log(bookdata)
    this.BookDataString.noArticlebookdata = dummybookdataString;
    console.log( this.BookDataString.noArticlebookdata)
      
      this.adminService.addBookData(this.BookDataString).subscribe((res) => {
      console.log(res)});
  }



  addTrainBookData() {
    if (this.gettrainedData.length > 0) {
      this.updateTrainBookData();
    }
    else {
      this.adminService.addTrainedData(this.trained).subscribe((res) => {
        console.log(res)
      });
    }
  }

  getTrainBookData() {
    this.adminService.getTrainedData().subscribe((res) => {
      this.gettrainedData = res;
      console.log( this.gettrainedData)
    });
  }

  updateTrainBookData() {
    this.gettrainedData[4].trainedData = this.gettrainedData[4].trainedData + " " + this.trained.trainedData;
    this.gettrainedData[4].trainedArticles = this.gettrainedData[4].trainedArticles + " " + this.trained.trainedArticles;
    var query = {
      trainedData: this.gettrainedData[4].trainedData,
      trainedArticles: this.gettrainedData[4].trainedArticles
    }
    this.adminService.updateTrainedData(this.gettrainedData[4]._id, query).subscribe((res) => {
      console.log(res)
    });
  }

  // addBookData() {
  //   this.adminService.addTrainedData(this.trainBookString).subscribe();
  // }

  // getBookData() {
  //   this.adminService.addTrainedData(this.trainBookString).subscribe();
  // }

  logout() {
    this._router.navigate(['/']);
  }

  ngOnInit() {
    this.getTrainBookData();
  }


}
