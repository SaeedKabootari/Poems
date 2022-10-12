import { CardDiv } from "../../style";

const Card = (props) => {
  return <CardDiv color={props.color}>{props.children}</CardDiv>;
};

export default Card;
