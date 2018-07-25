
import {ComponentFixtureAutoDetect, ComponentFixtureNoNgZone, fakeAsync, tick, TestBed, async, withModule} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { By } from 'selenium-webdriver';
import { routes } from './router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
 let input:Element;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        BrowserModule,
        CheckboxModule,
        AccordionModule,
        FormsModule,
        ButtonModule,
        RouterModule,
        RouterTestingModule 
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Basic');
  }));
  it('should not be checked', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
    expect(component.isChecked).toBe(false);
  })

  // it('should be checked when clicked', fakeAsync(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   tick();

  // let inputEl =fixture.debugElement.nativeElement.querySelector(By.css("p-checkbox"));
  //   inputEl.nativeElement.click();
  //   fixture.detectChanges();
  //   expect(component.onCheckboxChange).toHaveBeenCalled();
        
  // }));



  // it('checkbox is checked or not',()=>{
  //    const fixture = TestBed.createComponent(AppComponent);
     
  //   const app = fixture.debugElement.componentInstance;
  //   input = fixture.debugElement.query(By.css('#check')).nativeElement;

  //   expect(input.checked).toBeFalsy(); // default state

  //   input.click();
  //   fixture.detectChanges();

  //   expect(input.checked).toBeTruthy(); // state after click
  // } 
 });
