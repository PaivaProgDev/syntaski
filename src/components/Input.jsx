const Input = ({ style, placeholder, event, value }) => {
  return (
    <input
      onChange={event}
      style={style}
      type="text"
      placeholder={placeholder}
      value={value}
    ></input>
  );
};

export default Input;
