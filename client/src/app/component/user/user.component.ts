import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { TrainingData } from '../../interfaces/admin';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public gettrainedData:any = [];
  public userData:string ="";
  public bookdata:any = [];
  public array:any;
  public arraybook:any =[];
  public count:number=0;
  public counting:number=0;
  public userDataLength:number;

  constructor(private adminService:AdminService) { }


  getTrainBookData() {
    this.adminService.getTrainedData().subscribe((res) => {
      this.gettrainedData = res;
      this.array =  this.gettrainedData[0].trainedData.split(" ")
    });
   //this.array = this.gettrainedData[0].trainedData.split(" ")
  }

  Solvation() {
    var userData1 = this.userData.split(" ");
    this.userDataLength = userData1.length;
    for(var i=0;i<userData1.length;i++) {
      for(var j=0;j<this.array.length;j++) {
        if(userData1[i] == this.array[j])
        this.count = this.count+1;
      }
    }
    this.contentEvaluation();
  }

contentEvaluation() {
  if(this.count>5){
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
    this.arraybook =  this.bookdata[6].bookdata.split(" ")
  });
}

problemSolving() {
  var userData1 = this.userData.split(" ");
  for(var i=0;i<userData1.length;i++) {
    for(var j=0;j<this.arraybook.length;j++) {
      if(userData1[i] == this.arraybook[j])
      this.counting = this.counting+1;
    }
  }
  console.log(this.counting)
  this.display()

}

display() {
  if(this.counting>4)
  alert(JSON.stringify(this.bookdata[6]))
}
  ngOnInit() {
    this.getTrainBookData();
    this.getBookData()
  }

}
