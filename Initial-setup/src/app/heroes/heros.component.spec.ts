import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('HerosComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

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

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete()', () => {
        it('should remove the hero from, the heroes array', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[1]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero with correct values', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[1]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[1]);
        });
    });
});
