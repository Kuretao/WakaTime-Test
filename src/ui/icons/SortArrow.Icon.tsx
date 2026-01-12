type SortArrowIconProps = {
    style?: React.CSSProperties;
    iconColor?: string;
};

export const SortArrowIcon: React.FC<SortArrowIconProps> = ({ style, iconColor }) => (
    <svg width="9"     style={style}
         height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.49994 9.74994C3.49994 10.1642 3.83573 10.4999 4.24994 10.4999C4.66416 10.4999 4.99994 10.1642 4.99994 9.74994V2.56049L7.21967 4.78021C7.51256 5.07311 7.98732 5.07311 8.28022 4.78021C8.57311 4.48732 8.57311 4.01256 8.28022 3.71967L4.78022 0.219666C4.48732 -0.0732279 4.01256 -0.0732279 3.71967 0.219666L0.21967 3.71967C-0.0732233 4.01256 -0.0732232 4.48732 0.21967 4.78021C0.494274 5.05482 0.928995 5.07228 1.22358 4.83197L1.28022 4.78021L3.49994 2.56049V9.74994Z"
            fill={iconColor}/>
    </svg>
);