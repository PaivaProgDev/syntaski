const Input = ({ style, placeholder, event, values, length, className }) => {
  return (
    <input
      onChange={event}
      style={style}
      type="text"
      placeholder={placeholder}
      value={values}
      maxLength={length}
      className={className}
    ></input>
  );
};

export default Input;
