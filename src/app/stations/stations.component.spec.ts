import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsComponent } from './stations.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('StationsComponent', () => {
  let component: StationsComponent;
  let fixture: ComponentFixture<StationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [StationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    // const capitalizedStringTest = component.capitalizeFirstLetter('string');
    // expect(capitalizedStringTest).toBe('String');
    // const capitalizedStringTest2 = component.capitalizeFirstLetter('p');
    // expect(capitalizedStringTest2).toBe('P');
  });
});
