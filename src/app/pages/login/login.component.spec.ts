import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';

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
    expect($(fixture.nativeElement).find('div.loginForm').length).toBe(1);
  });

  it('should contain the username field', ()=>{
    expect($(fixture.nativeElement).find('input.username').length).toBe(1);
  });

  it('should contain the password field', ()=>{
    expect($(fixture.nativeElement).find('input.password').length).toBe(1);
  });

  
  

});
