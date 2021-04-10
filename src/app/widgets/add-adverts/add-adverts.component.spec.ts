import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouteReuseStrategy } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AddAdvertsComponent } from './add-adverts.component';
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdvertService } from 'src/app/services/advert-service/advert.service';

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ],
      providers:[AppComponent, NgModel],
      imports:[AppRoutingModule]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
