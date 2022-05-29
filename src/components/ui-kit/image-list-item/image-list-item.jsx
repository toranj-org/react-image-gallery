import React from "react";
import PropTypes from 'prop-types';
import { classNames, objectUtils } from '../../utils';


const classes = {
	root: "pct-ui-image-list-item-root",
	label: "pct-ui-image-list-item-label"
}

export const ImageListItem = (props) => {

	const handleItemClick = (id) => {
		if (props.onItemClick) props.onItemClick(id);
	};


	const otherProps = objectUtils.removeKeys(props, ["className", "style", "classes", "styles",
		"children", "onItemClick", "src", "title"]);

	return (
		<li
			style={{
				backgroundImage: `url(${props.src})`,
				...props.styles?.root
			}}
			className={classNames(classes.root, props.classes?.root)}
			onClick={() => handleItemClick(props.id)}
			{...otherProps}
		>
			{
				props.title && (
					<label
						style={props.styles?.title}
						className={classNames(classes.label, props.classes?.label)}>{props.title}</label>
				)
			}
			{props.children}
		</li>
	);
}

ImageListItem.defaultProps = {
	classes: {},
	styles: {},
	children: null,
	id: null,
	src: null,
	title: null,
	onItemClick: null
};

ImageListItem.propTypes = {
	classes: PropTypes.object,
	styles: PropTypes.object,
	children: PropTypes.node,
	id: PropTypes.any.isRequired,
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
	onItemClick: PropTypes.func
}