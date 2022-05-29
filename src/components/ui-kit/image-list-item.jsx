import React from "react";
import PropTypes from 'prop-types';
import { classNames } from '../utils';


const classes = {
	root: "pct-ui-image-list-item-root",
	label: "pct-ui-image-list-item-label"
}

export const ImageListItem = (props) => {

	const handleItemClick = (id) => {
		if (props.onItemClick) props.onItemClick(id);
	};

	return (
		<div
			style={{
				backgroundImage: `url(${props.src})`,
				...props.styles?.root
			}}
			className={classNames(classes.root, props.classes?.root)}
			onClick={() => handleItemClick(props.id)}
		>
			{
				props.label && (
					<label
						style={props.styles?.label}
						className={classNames(classes.label, props.classes?.label)}>{props.label}</label>
				)
			}
			{props.children}
		</div>
	);
}

ImageListItem.defaultProps = {
	classes: {},
	styles: {},
	children: null,
	id: null,
	src: null,
	label: null,
	onItemClick: null
};

ImageListItem.propTypes = {
	classes: PropTypes.object,
	styles: PropTypes.object,
	children: PropTypes.node,
	id: PropTypes.any.isRequired,
	src: PropTypes.string.isRequired,
	label: PropTypes.string,
	onItemClick: PropTypes.func
}