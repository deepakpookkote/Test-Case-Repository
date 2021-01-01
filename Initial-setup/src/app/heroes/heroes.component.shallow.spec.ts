import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('Heroes Component (Shallow Test)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            {
                id: 1,
                name: 'SuperMan',
                strength: 9
            },
            {
                id: 2,
                name: 'BatMan',
                strength: 5
            },
            {
                id: 3,
                name: 'Thor',
                strength: 8
            }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                {
                    provide: HeroService,
                    useValue: mockHeroService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heros correctly from service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });
});
