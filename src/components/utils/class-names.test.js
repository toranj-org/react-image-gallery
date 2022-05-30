import { classNames } from './class-names';

describe('classNames', () => {
    it('keeps object keys with truthy values', function () {
        const result = classNames({
            a: true,
            b: false,
            c: 0,
            d: null,
            e: undefined,
            f: 1
        })
        expect(result).toEqual('a f');
    });

    it('joins arrays of class names and ignore falsy values', function () {
        const result = classNames(['a', 'b', 'c', false, 0, null, undefined, 'd', 'e', 'f']);
        expect(result).toEqual('a b c d e f');
    });

    it('supports heterogenous arguments', function () {
        const result = classNames({ a: true }, 'b', 0);
        expect(result).toEqual('a b');
    });

    it('should be trimmed', function () {
        const result = classNames('', 'b', {}, '');
        expect(result).toEqual('b');
    });

    it('returns an empty string for an empty configuration', function () {
        const result = classNames({});
        expect(result).toEqual('');
    });

    it('supports an array of class names', function () {
        const result = classNames(['a', 'b']);
        expect(result).toEqual('a b');
    });

    it('joins array arguments with string arguments', function () {
        const result = classNames(['a', 'b'], 'c');
        expect(result).toEqual('a b c');
        const result2 = classNames('c', ['a', 'b']);
        expect(result2).toEqual('c a b');
    });

    it('handles multiple array arguments', function () {
        const result = classNames(['a', 'b'], ['c', 'd']);
        expect(result).toEqual('a b c d');
    });

    it('handles arrays that are empty', function () {
        const result = classNames('a', []);
        expect(result).toEqual('a');
    });

    it('handles all types of truthy and falsy property values as expected', function () {
        const result = classNames({
            // falsy:
            null: null,
            emptyString: "",
            noNumber: NaN,
            zero: 0,
            negativeZero: -0,
            false: false,
            undefined: undefined,

            // truthy (literally anything else):
            nonEmptyString: "foobar",
            whitespace: ' ',
            function: Object.prototype.toString,
            emptyObject: {},
            nonEmptyObject: { a: 1, b: 2 },
            emptyList: [],
            nonEmptyList: [1, 2, 3],
            greaterZero: 1
        });
        expect(result).toEqual('nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
    });
});