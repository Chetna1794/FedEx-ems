import { Component, OnInit } from '@angular/core';
import { CommonServiceComponent } from './services/common-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "";
  constructor(private _commonService: CommonServiceComponent){}
    
  ngOnInit(){
    this._commonService.getCommonJson().subscribe(
      data =>{
        this.title = data.title;
      },
      error =>{
        console.log(error);
      }
    );
  }


}
