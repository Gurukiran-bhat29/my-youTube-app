import Button from "./Button";
import { Lists } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {Lists.map((list, index) => <Button key={`list${index}`} name={list} />)}
    </div>
  )
}

export default ButtonList;