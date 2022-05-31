import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as Home from '../../module-home';
import NotFound from './not-found';

const MockHomePage = () => <h1 data-testid="home-page">Home page</h1>

const App = () => {
    return (
        <Routes>
            <Route path={Home.Routes.Index.path} element={<MockHomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

describe('NotFound', () => {
    it('should navigate to home page', () => {
        const history = createMemoryHistory();
        history.push(Home.Routes.Index.path);
        render(
            <Router location={history.location} navigator={history}>
                <App />
            </Router>
        )
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    })

    it('should navigate to not-found page for invalid routes', () => {
        const history = createMemoryHistory();
        history.push('/invalid-route');
        render(
            <Router location={history.location} navigator={history}>
                <App />
            </Router>
        )
        expect(screen.getByText('404')).toBeInTheDocument();
    })
});