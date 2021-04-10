import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';
import { HomePageComponent } from '../home-page/home-page.component';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [AppComponent, UserService],
      imports: [FormsModule, AppRoutingModule],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("register form should have validations", ()=>{
    expect($(fixture.nativeElement).find('.firstname').val()).toEqual("");
    expect($(fixture.nativeElement).find('.lastname').val()).toEqual("");
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    expect($(fixture.nativeElement).find('.avatar').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    component.error=("All the fields are required to register an account");
});
it("register form should register new user", ()=>{
  expect($(fixture.nativeElement).find('.firstname').add("Kerry"));
  expect($(fixture.nativeElement).find('.lastname').add("OBoyle"));
  expect($(fixture.nativeElement).find('.username').add("test.ie"));
  expect($(fixture.nativeElement).find('.password').add("Password01"));
  expect($(fixture.nativeElement).find('.avatar').add("www.google.ie"));
  $(fixture.nativeElement).find('.login').trigger('click');
  expect($(fixture.nativeElement.HomePageComponent));
});

it('should contain a register form', ()=>{
    expect($(fixture.nativeElement).find('.registerForm').length).toBe(1);
});

it('should contain the firstname field', ()=>{
    expect($(fixture.nativeElement).find('.firstname').length).toBe(1);
    expect($(fixture.nativeElement).find('.username').length).toBe(1);
});

it('should contain the password field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
});

it('should contain the avatar field', ()=>{
    expect($(fixture.nativeElement).find('.avatar').length).toBe(1);
});

it('should contain the register button', ()=>{
        expect($(fixture.nativeElement).find('.login').length).toBe(1);
});
 
});

