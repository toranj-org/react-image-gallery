import React from "react";
import PropTypes from 'prop-types';
import { classNames, objectUtils } from '../../utils';


const classes = {
	root: "pct-ui-image-list-root"
}

export const ImageList = (props) => {


	const styles = {
		root: {
			gap: props.gap,
			gridTemplateColumns: `repeat(auto-fit, minmax(${props.colWidth}px, 1fr))`,
			gridAutoRows: props.rowHeight
		}
	}

	const otherProps = objectUtils.removeKeys(props, ["className", "style", "classes", "styles", "children", "gap",
		"rowHeight", "colWidth"]);

	return (
		<ul
			style={{
				...styles.root,
				...props.styles?.root
			}}
			className={classNames(classes.root, props.classes?.root)}
			{...otherProps}>
			{props.children}
		</ul>
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