import { PoemLi, StyledLink, CardGreenLight } from "../../style";
import { Fragment } from "react";

const PoemItem = (props) => {
  return (
    <Fragment>
      <CardGreenLight>
        <PoemLi>
          <h4>{props.title}</h4>
          <p>{props.author}</p>
          <StyledLink
            to={{
              pathname: `/poems/${props.title}`,
              state: {
                title: props.title,
                author: props.author,
                lines: props.lines,
              },
            }}
          >
            Detail
          </StyledLink>
        </PoemLi>
      </CardGreenLight>
    </Fragment>
  );
};

export default PoemItem;
