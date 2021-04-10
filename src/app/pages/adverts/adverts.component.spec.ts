import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
//import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AdvertsComponent } from './adverts.component';

import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

describe('AdvertsComponent', () => {
  let component: AdvertsComponent;
  let fixture: ComponentFixture<AdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsComponent ],
      providers:[AppComponent, NgModel],
      imports: [ AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("advert container exists", ()=>{
    expect($(fixture.nativeElement).find('.advertContainer'));
 
  });

});
