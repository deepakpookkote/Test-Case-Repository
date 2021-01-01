import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {
    let mockMessageService;
    let heroService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                {
                    provide: MessageService,
                    useValue: mockMessageService
                }
            ]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        heroService = TestBed.get(HeroService);
    });

    it('should be true', () => {
        expect(true).toEqual(true);
    });

    describe('getHero()', () => {
        it('should call get with the correct url', () => {
            heroService.getHero(4).subscribe();

            const req = httpTestingController.expectOne('api/heroes/4');
            req.flush({ id: 4, name: 'SuperMan', strength: 100 });
            httpTestingController.verify();
        });
    });
});
