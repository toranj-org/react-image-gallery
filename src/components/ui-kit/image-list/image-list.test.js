import { render, screen } from '@testing-library/react';
import { ImageList } from './image-list';

const itemsData = [
	{
		img: '/fake.png',
		title: 'Breakfast'
	},
	{
		img: '/fake.png',
		title: 'Tasty burger'
	},
];

const children = itemsData.map((item) => (
	<span
		key={item.title}
		title={item.title}
		data-testid="test-children"
	>
		<img src={item.img} alt="foo" />
	</span>
));

describe('<ImageList />', () => {

	it('should render children', () => {
		render(<ImageList data-testid="test-root">{children}</ImageList>);

		expect(screen.getAllByTestId('test-children').length).toBe(2);

	});
});

describe('style attribute:', () => {
	it('should render with default grid-template-columns and gap styles', () => {

		render(<ImageList data-testid="test-root" colWidth={200} gap={4}>{children}</ImageList >);

		expect(screen.getByTestId('test-root').style['grid-template-columns']).toEqual(`repeat(auto-fit, minmax(${200}px, 1fr))`);
		expect(screen.getByTestId('test-root').style.gap).toEqual('4px');
	});

	it('should overwrite style', () => {

		render(
			<ImageList gap={4} styles={{
				root: {
					gap: '5px'
				}
			}} data-testid="test-root">
				{children}
			</ImageList>,
		);

		expect(screen.getByTestId('test-root').style.gap).toEqual('5px');
	});
});

describe('prop: classes', () => {
	it('should include props classes', () => {

		render(
			<ImageList
				data-testid="root"
				open
				classes={{
					root: 'root-test-class'
				}}
			/>
		);

		expect(screen.queryByTestId('root')).toHaveAttribute('class', 'pct-ui-image-list-root root-test-class');
	});
});