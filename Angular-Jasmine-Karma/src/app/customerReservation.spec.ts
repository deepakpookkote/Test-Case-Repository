import { CustomerReservation } from './customerReservation';

describe('Room Reservation', () => {
    it('Testing room is reserved or not!!', () => {
        //Arrange
        let customerReserve = new CustomerReservation();
        //Act
        const isReserved = customerReserve.reserveRoom();
        //Assert
        expect(isReserved).toBeTruthy();
    });
});
