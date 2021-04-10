import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { componentFactoryName } from '@angular/compiler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AppComponent],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    $('.username').text("Kerry");
  });

  it('should contain a login form', ()=>{
    expect($(fixture.nativeElement).find('.loginForm').length).toBe(1);
  });

  it('should contain the username field', ()=>{
    expect($(fixture.nativeElement).find('.username').length).toBe(1);
  });

  it('should contain the password field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
  });

  it("should have login form validations", ()=>{
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    component.error=("Both email and password are required to login");
  });
    it("should have login form validations for password", ()=>{
    $(fixture.nativeElement).find('.username').val("10536252@mydbs.ie");
    $(fixture.nativeElement).find('.password').val("");
    $(fixture.nativeElement).find('.login').trigger('click');
    component.error=("Both email and password are required to login")

  });
  it("should have login form validations for email address", ()=>{
    $(fixture.nativeElement).find('.username').val("Kerry");
    $(fixture.nativeElement).find('.password').val("Password");
    component.error=("Please input a valid email address");
  });

  it("login form should allow user to go to register page", ()=>{
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    $(fixture.nativeElement).find('.registerLink').trigger('click');
    expect($(fixture.nativeElement).find('.registerForm'));

  });

});
