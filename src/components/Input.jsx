const Input = ({ style, placeholder, event, values }) => {
  return (
    <input
      onChange={event}
      style={style}
      type="text"
      placeholder={placeholder}
      value={values}
    ></input>
  );
};

export default Input;
