import { Btn } from "../../style";

const Button = (props) => {
  return <Btn onClick={props.onClick}>{props.children}</Btn>;
};

export default Button;
