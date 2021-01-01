import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent', () => {
    let mockActivatedRoute, mockHeroService, mockLocation;
    let fixture: ComponentFixture<HeroDetailComponent>;
    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: {
                paramMap: {
                    get: () => {
                        return '3';
                    }
                }
            }
        };
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroDetailComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: mockActivatedRoute
                },
                {
                    provide: HeroService,
                    useValue: mockHeroService
                },
                {
                    provide: Location,
                    useValue: mockLocation
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroDetailComponent);
        mockHeroService.getHero.and.returnValue(of({ id: 4, name: 'SaktiMan', strength: 44 }));
    });

    it(`should render hero name in h2 tag`, () => {
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SAKTIMAN');
    });

    // it(`should call updateHero when save is called`, (done) => {
    //     mockHeroService.updateHero.and.returnValue(of({}));
    //     fixture.detectChanges();

    //     fixture.componentInstance.save();
    //     setTimeout(() => {
    //         expect(mockHeroService.updateHero).toHaveBeenCalled();
    //         done();
    //     }, 250);
    // });
    // it(`should call updateHero when save is called`, fakeAsync(() => {
    //     mockHeroService.updateHero.and.returnValue(of({}));
    //     fixture.detectChanges();

    //     fixture.componentInstance.save();
    //     // tick(250);
    //     flush();
    //     expect(mockHeroService.updateHero).toHaveBeenCalled();
    // }));
    it(`should call updateHero when save is called`, async(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();

        fixture.whenStable().then(() => {
            expect(mockHeroService.updateHero).toHaveBeenCalled();
        });
    }));
});
