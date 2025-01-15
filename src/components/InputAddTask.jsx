import Button from "./Button";
import { Plus } from "lucide-react";

const InputAddTask = () => {
  const btnStyle = {
    btnOption: {
      backgroundColor: "red",
    },
  };

  return (
    <label>
      <input type="text"></input>
      <Button style={btnStyle.btnOption} content={<Plus />} />
    </label>
  );
};

export default InputAddTask;
