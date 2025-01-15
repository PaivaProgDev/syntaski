import "./Button.scss";

const Button = ({ content, style }) => {
  return (
    <button style={style} className="btn-main">
      {content}
    </button>
  );
};

export default Button;
