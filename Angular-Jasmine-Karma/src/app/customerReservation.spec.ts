import { CustomerReservation } from './customerReservation';

describe('Room Reservation', () => {
    let customerReserve = new CustomerReservation();

    beforeEach(() => {
     customerReserve = new CustomerReservation();
    });

    afterEach(() => {
        customerReserve = null;
    });

    it('Testing room is reserved or not!!', () => {
        //Arrange
        //Act
        const isReserved = customerReserve.reserveRoom();
        //Assert
        expect(isReserved).toBeTruthy();
    });

    it('should register customer/ Increment count by 1', () => {

        const customerCount = customerReserve.registerCustomer();
        console.log(customerReserve.customerCount);

        expect(customerCount).toEqual(11);
    });

    it('should un-register customer/ decrement count by 1  ', () => {

        const customerCount = customerReserve.unRegisterCustomer();
        console.log(customerReserve.customerCount);

        expect(customerCount).toEqual(9);
    });
});
