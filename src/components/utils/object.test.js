import { removeKeys } from './object';

describe('removeKeys', () => {

    it('remove specified keys', ()=> {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        const result = removeKeys(obj, ['a', 'c']);
        expect(result).toEqual({
            b: 2
        });
    });

});