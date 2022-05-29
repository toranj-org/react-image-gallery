import React from "react";
import PropTypes from 'prop-types';
import { classNames } from '../utils';


const classes = {
	root: "pct-ui-image-list-root"
}

export const ImageList = (props) => {


	const styles = {
		root: {
			gridGap: props.gap,
			gridTemplateColumns: `repeat(auto-fit, minmax(${props.colWidth}px, 1fr))`,
			gridAutoRows: props.rowHeight
		}
	}

	return (
		<div
			style={{
				...props.styles?.root,
				...styles.root
			}}
			className={classNames(classes.root, props.classes?.root)}>
			{props.children}
		</div>
	);
}

ImageList.defaultProps = {
	classes: {},
	styles: {},
	children: null,
	gap: 0,
	rowHeight: 300,
	colWidth: 300
};

ImageList.propTypes = {
	classes: PropTypes.object,
	styles: PropTypes.object,
	children: PropTypes.node,
	gap: PropTypes.number,
	rowHeight: PropTypes.number,
	colWidth: PropTypes.number
}