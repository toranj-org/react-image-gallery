import { render, screen, fireEvent } from '@testing-library/react';
import { Popup } from './popup';

describe('prop: open', () => {
    it('should not render the children by default', () => {

        render(
            <Popup open={false}>
                <p data-testid="content">Hello World</p>
            </Popup>
        );

        expect(screen.queryByTestId('content')).toBeNull();
    });

    it('renders the children inside a div', () => {
        render(
            <Popup data-testid="popup" open>
                <p>Hello World</p>
            </Popup>,
        );

        expect(screen.getByTestId('popup')).toBeInTheDocument();
    });
});

describe('prop: classes', () => {
    it('should include props classes', () => {

        render(
            <Popup
                data-testid="popup"
                open
                classes={{
                    root: 'root-test-class',
                    container: 'container-test-class'
                }}
            />
        );

        expect(screen.queryByTestId('root')).toHaveAttribute('class', 'pct-ui-popup-root root-test-class');
        expect(screen.queryByTestId('popup')).toHaveAttribute('class', 'container-test-class');
    });
});

describe('prop: onOverlayClick', () => {
    it('should call after click', () => {

        const onOverlayClick = jest.fn();

        render(
            <Popup
                open
                onOverlayClick={onOverlayClick}
            />
        );

        fireEvent.click(screen.queryByTestId('root'))
        expect(onOverlayClick).toHaveBeenCalled();
    });
});