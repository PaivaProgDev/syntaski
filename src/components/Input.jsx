const Input = ({ style, placeholder, event, values, length }) => {
  return (
    <input
      onChange={event}
      style={style}
      type="text"
      placeholder={placeholder}
      value={values}
      maxLength={length}
    ></input>
  );
};

export default Input;
