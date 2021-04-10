import { NgStyle } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NgModule } from '@angular/core';

import { MyAdsComponent } from './my-ads.component';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { AddAdvertsComponent } from 'src/app/widgets/add-adverts/add-adverts.component';
import { ApiService } from 'src/app/services/api-service/api.service';


describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      providers:[AppComponent, NgModel, AddAdvertsComponent, ApiService],
      imports:[AppRoutingModule]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
