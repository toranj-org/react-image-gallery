import { render, screen, fireEvent } from '@testing-library/react';
import { ImagePreview } from './image-preview';

describe('style attribute:', () => {
	it('should overwrite style', () => {
		render(
			<ImagePreview
				id="id"
				src="src"
				styles={{
					container: {
						backgroundSize: "cover"
					}
				}} />);

		expect(screen.getByTestId('container').style['background-size']).toEqual('cover');
	});
});

describe('prop: title, description', () => {
	it('should not render properly', () => {
		render(
			<ImagePreview
				data-testid="root"
				id="id"
				src="src"
				title="title"
				description="description"
			/>
		);

		expect(screen.getByText('title')).toBeInTheDocument();
		expect(screen.getByText('description')).toBeInTheDocument();
	});
});


describe('prop: classes', () => {
	it('should include props classes', () => {

		render(
			<ImagePreview
				data-testid="root"
				id="id"
				src="src"
				title="title"
				classes={{
					root: 'root-test-class',
					label: 'title-test-class'
				}}
			/>
		);

		expect(screen.queryByTestId('root')).toHaveAttribute('class', 'pct-ui-image-preview-root root-test-class');
		expect(screen.queryByTestId('label')).toHaveAttribute('class', 'pct-ui-image-preview-label title-test-class');
	});
});


describe('prop: onItemClick', () => {
	it('should call after click', () => {

		const onCloseButtonClick = jest.fn();
		const onPrevButtonClick = jest.fn();
		const onNextButtonClick = jest.fn();

		render(
			<ImagePreview
			    showButtons
				data-testid="root"
				id="id"
				src="src"
				onCloseButtonClick={onCloseButtonClick}
				onPrevButtonClick={onPrevButtonClick}
				onNextButtonClick={onNextButtonClick}
			/>
		);

		fireEvent.click(screen.queryByTestId('close-button'));
		fireEvent.click(screen.queryByTestId('next-button'));
		fireEvent.click(screen.queryByTestId('prev-button'));

		expect(onCloseButtonClick).toHaveBeenCalled();
		expect(onPrevButtonClick).toHaveBeenCalled();
		expect(onNextButtonClick).toHaveBeenCalled();
	});
});