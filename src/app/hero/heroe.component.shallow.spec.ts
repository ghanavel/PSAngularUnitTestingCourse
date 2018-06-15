import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (Shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [HeroComponent],
          schemas: [NO_ERRORS_SCHEMA]
      });
      fixture = TestBed.createComponent(HeroComponent);
      
    });
    it('should have the correct hero', ()=> {
      fixture.componentInstance.hero = { id: 1, name: 'abcde', strength: 3};
      //fixture.detectChanges();
      expect(fixture.componentInstance.hero.name).toEqual('abcde')
    })

    it('should render the hero name in anchor tag', ()=> {
        fixture.componentInstance.hero = { id: 1, name: 'Doctor', strength: 3};
        fixture.detectChanges();
        const deA = fixture.debugElement.query(By.css('a'));
        expect(deA.nativeElement.textContent).toContain('Doctor');
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('Doctor')
      })
})