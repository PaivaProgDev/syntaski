import "./Button.scss";

const Button = ({ content, style, event }) => {
  return (
    <button onClick={event} style={style} className="btn-main">
      {content}
    </button>
  );
};

export default Button;
