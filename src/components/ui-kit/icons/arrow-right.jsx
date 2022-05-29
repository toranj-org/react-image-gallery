export const ArrowRight = (props) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 16 16`}
            width={width}
            height={height}
            fill={color}
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
        </svg>
    )
}