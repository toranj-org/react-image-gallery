import React from 'react';
import { render } from "@testing-library/react";
import { useCombinedRefs } from ".";

describe("mergeRefs", () => {
    it("merge refs", () => {
        const Dummy = React.forwardRef(function Dummy(_, ref) {
            React.useImperativeHandle(ref, () => "refValue");
            return null;
        });
        const refAsFunc = jest.fn();
        const refAsObj = { current: undefined };
        const Example = ({ visible }) => {
            const ref = useCombinedRefs(refAsFunc, refAsObj);
            return visible ? <Dummy ref={ref} /> : null;
        };
        const { rerender } = render(<Example visible />);
        expect(refAsFunc).toHaveBeenCalledTimes(1);
        expect(refAsFunc).toHaveBeenCalledWith("refValue");
        expect(refAsObj.current).toBe("refValue");
        rerender(<Example visible={false} />);
        expect(refAsFunc).toHaveBeenCalledTimes(2);
        expect(refAsFunc).toHaveBeenCalledWith(null);
        expect(refAsObj.current).toBe(null);
    });

});