const Input = ({ style, placeholder, event }) => {
  return (
    <input
      onChange={event}
      style={style}
      type="text"
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
