import React from "react";

export const Gallery = (props) => {

	const handleItemClick = (item) => {
		if (props.onItemClick) props.onItemClick(item);
	};

	const renderTile = (image) => {
		return (
			<div
				onClick={() => handleItemClick(image)}
				style={{
					backgroundImage: `url(${image.src})`
				}}
				className="pct-ui-gallery-item">
				<label>{image.title}</label>
			</div>
		);
	}
	return (
		<div className="pct-ui-gallery-root">
			{React.Children.toArray(props.images.map((image) => {
				return renderTile(image)
			}))}
		</div>
	);
}