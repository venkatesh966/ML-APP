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

  constructor(private adminService: AdminService,private _router:Router) {
    this.trained = {
      trainedData: "",
    }

    this.BookDataString = {
      bookdata:"",
      Rating:""
    }
  }

  addBookData() {
      this.adminService.addBookData(this.BookDataString).subscribe((res) => {
      console.log(res)});
  }



  addTrainBookData() {
    if (this.gettrainedData.length > 0) {
      this.updateTrainBookData();
    }
    else {
      this.adminService.addTrainedData(this.trained).subscribe((res) => {
      console.log(res)});
    }
  }

  getTrainBookData() {
    this.adminService.getTrainedData().subscribe((res) => {
      this.gettrainedData = res;
    });
  }

  updateTrainBookData() {
    this.gettrainedData[0].trainedData = this.gettrainedData[0].trainedData + " " + this.trained.trainedData;
    var query = {
      trainedData:this.gettrainedData[0].trainedData
    }
    this.adminService.updateTrainedData(this.gettrainedData[0]._id, query).subscribe((res) => {
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
