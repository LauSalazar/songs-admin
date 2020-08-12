import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoDevPage } from './info-dev.page';

describe('InfoDevPage', () => {
  let component: InfoDevPage;
  let fixture: ComponentFixture<InfoDevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
