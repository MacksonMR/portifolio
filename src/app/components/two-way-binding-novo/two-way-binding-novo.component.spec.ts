import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayBindingNovoComponent } from './two-way-binding-novo.component';

describe('TwoWayBindingNovoComponent', () => {
  let component: TwoWayBindingNovoComponent;
  let fixture: ComponentFixture<TwoWayBindingNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
