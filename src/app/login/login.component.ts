import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newUserClick = function(){
    $(".login-form").fadeOut(200);
    $(".registration-form").fadeIn(500);
    $(".other-options").fadeOut(200);
    $(".existing-user-option").fadeIn(300);
    $(".logo").css({
      "top":"0",
      "width": "160px",
      "height": "80px"
    });
  }
    
  
  existingUserClick = function(){
    $(".registration-form").fadeOut(500);
    $(".forgot-password-form").fadeOut(300);
    $(".login-form").fadeIn(300);
    $(".other-options").fadeIn(200);
    $(".existing-user-option").fadeOut(300);
    $(".logo").css({
      "top":"5em",
      "width": "200px",
      "height": "100px"
    });
  }

  loginBtnClick = function(){

  }

  registerBtnClick = function(){

  }

  forgotPasswordClick = function(){
    $(".login-form").fadeOut(200);
    $(".forgot-password-form").fadeIn(500);
    $(".other-options").fadeOut(200);
    $(".existing-user-option").fadeIn(300);
    $(".logo").css({
      "top":"7em",
      "width": "250px",
      "height": "120px"
    });
  }
 
}
