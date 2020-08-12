describe('to be vs to Equal', () => {
    it('should test "toBe" matcher', () => {
        const a = {
            val: 10
        };
        const b = {
            val: 10
        };
        expect(a).toEqual(b);
    });
});


