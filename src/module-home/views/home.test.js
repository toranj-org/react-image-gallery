import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import Home from './home';

afterEach(cleanup);

describe('Home', () => {
    it('renders without crashing', async () => {
        render(<Home />);
        await waitFor(() => screen.findByText('title1'))
        expect(screen.getByText('title1')).toBeInTheDocument();
    });

    it('should open popup after clicking on item', async () => {

        render(<Home />);
        await waitFor(() => screen.findByText('title1'));

        fireEvent.click(screen.getByText('title1'));
        await waitFor(() => screen.findByText('description1'));
        expect(screen.getByText('description1')).toBeInTheDocument();
    });

    it('should change the pic after clicking on next button', async () => {

        render(<Home />);
        await waitFor(() => screen.findByText('title1'));
        fireEvent.click(screen.getByText('title1'));
        await waitFor(() => screen.findByText('description1'));

        fireEvent.click(screen.getByTestId('next-button'));
        await waitFor(() => screen.findByText('description2'));

        expect(screen.getByText('description2')).toBeInTheDocument();
    });

    it('should change the pic clicking on prev button', async () => {

        render(<Home />);
        await waitFor(() => screen.findByText('title1'));
        fireEvent.click(screen.getByText('title1'));
        await waitFor(() => screen.findByText('description1'));
        
        fireEvent.click(screen.getByTestId('next-button'));
        await waitFor(() => screen.findByText('description2'));

        fireEvent.click(screen.getByTestId('prev-button'));
        await waitFor(() => screen.findByText('description1'));

        expect(screen.getByText('description1')).toBeInTheDocument();
    });

    it('should close popup after clicking on close button', async () => {

        render(<Home />);
        await waitFor(() => screen.findByText('title1'));
        fireEvent.click(screen.getByText('title1'));
        await waitFor(() => screen.findByText('description1'));
        
        fireEvent.click(screen.getByTestId('close-button'));
        expect(screen.queryByText('description1')).toBeNull();
    });
});