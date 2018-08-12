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
  public array:any;
  public count:number=0;
  public userDataLength:number;

  constructor(private adminService:AdminService) { }


  getTrainBookData() {
    this.adminService.getTrainedData().subscribe((res) => {
      this.gettrainedData = res;
      console.log( this.gettrainedData[0].trainedData)
      this.array =  this.gettrainedData[0].trainedData.split(" ")
    });
   //this.array = this.gettrainedData[0].trainedData.split(" ")
  }

  Solvation() {
    var userData1 = this.userData.split(" ");
    this.userDataLength = userData1.length;
    console.log(userData1)
    for(var i=0;i<userData1.length;i++) {
      for(var j=0;j<this.array.length;j++) {
        if(userData1[i] == this.array[j])
        this.count = this.count+1;
        console.log(this.count)
      }
    }
    this.contentEvaluation();
  }

contentEvaluation() {
  if(this.count>5)
  alert("you are upset dont worry we will provide best solutions from famous books")
  else
  alert("you are happy still if u need any suggestions wait")
}

  ngOnInit() {
    this.getTrainBookData();
  }

}
