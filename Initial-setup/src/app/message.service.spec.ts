import { MessageService } from './message.service';

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {});

    it('should not have any messages initially', () => {
        service = new MessageService();

        expect(service.messages.length).toEqual(0);
    });
    describe('add()', () => {
        it('should add messages to message array', () => {
            service = new MessageService();

            service.add('message1');

            expect(service.messages.length).toBe(1);
        });
    });
    describe('clear()', () => {
        it('should clear all messages from messages array', () => {
            service = new MessageService();
            service.add('message1');

            service.clear();

            expect(service.messages.length).toBe(0);
        });
    });
});
