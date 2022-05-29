import { render, screen, fireEvent } from '@testing-library/react';
import { ImageListItem } from './image-list-item';

describe('style attribute:', () => {
	it('should overwrite style', () => {
		render(
			<ImageListItem
				id="id"
				src="src"
				data-testid="root"
				styles={{
					root: {
						cursor: "progress"
					}
				}} />);

		expect(screen.getByTestId('root').style.cursor).toEqual('progress');
	});
});

describe('prop: title', () => {

	it('should not render properly', () => {

		render(
			<ImageListItem
				data-testid="root"
				id="id"
				src="src"
				title="title"
			/>
		);

		expect(screen.getByText('title')).toBeInTheDocument();
	});

	it('should not render title when is null', () => {

		render(
			<ImageListItem
				data-testid="root"
				id="id"
				src="src"
			/>
		);

		expect(screen.queryByText('title')).toBeNull();
	});
});


describe('prop: classes', () => {
	it('should include props classes', () => {

		render(
			<ImageListItem
				data-testid="root"
				id="id"
				src="src"
				title="title"
				classes={{
					root: 'root-test-class',
					title: 'title-test-class'
				}}
			/>
		);

		expect(screen.queryByTestId('root')).toHaveAttribute('class', 'pct-ui-image-list-item-root root-test-class');
		expect(screen.queryByText('title')).toHaveAttribute('class', 'pct-ui-image-list-item-title title-test-class');
	});
});


describe('prop: onItemClick', () => {
	it('should call after click', () => {

		const onItemClick = jest.fn();

		render(
			<ImageListItem
				data-testid="root"
				id="id"
				src="src"
				onItemClick={onItemClick}
			/>
		);

		fireEvent.click(screen.queryByTestId('root'))
		expect(onItemClick).toHaveBeenCalledWith('id');
	});
});