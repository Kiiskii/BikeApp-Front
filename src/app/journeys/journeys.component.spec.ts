import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysComponent } from './journeys.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JourneysComponent', () => {
  let component: JourneysComponent;
  let fixture: ComponentFixture<JourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [JourneysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const convertSecondsToMinutesTest = component.convertSecondsToMinutes(120);
    expect(convertSecondsToMinutesTest).toBe('2min');
    const convertSecondsToMinutesTest2 = component.convertSecondsToMinutes(366);
    expect(convertSecondsToMinutesTest2).toBe('6min 6sec');
  });
});
