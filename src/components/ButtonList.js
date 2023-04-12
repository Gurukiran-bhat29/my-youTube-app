import Button from "./Button";
import { Lists } from "../utils/constants";

const ButtonList = () => {
  return (
    <>
      {Lists.map((list, index) => <Button key={`list${index}`} name={list} />)}
    </>
  )
}

export default ButtonList;