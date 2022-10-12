import { PoemLi, CardGreen } from "../../style";
import Button from "../UI/Button";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { poemActions } from "../../store/poem-slice";

const FavoritePoemItem = (props) => {
  const dispatch = useDispatch();
  const deleteFavoritePoemHandler = () => {
    dispatch(poemActions.deleteFromFavorite(props.title));
  };
  return (
    <Fragment>
      <CardGreen>
        <PoemLi>
          <h4>{props.title}</h4>
          <p>{props.author}</p>
          <Button onClick={deleteFavoritePoemHandler}>
            Delete From Favorite
          </Button>
        </PoemLi>
      </CardGreen>
    </Fragment>
  );
};

export default FavoritePoemItem;
