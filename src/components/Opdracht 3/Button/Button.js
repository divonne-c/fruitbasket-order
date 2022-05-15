import "./Button.css";

const Button = ({ type, children, ...otherProps }) => {
    return (
        <button type={type} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
