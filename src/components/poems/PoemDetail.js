import { PoemDetailDiv, PoemDetailButtonWrapper } from "../../style";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { poemActions } from "../../store/poem-slice";
import { useLocation, useHistory } from "react-router-dom";

const PoemDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state;

  const addToFavoriteHandler = () => {
    const favoritePoem = {
      title: state.title,
      author: state.author,
      lines: state.lines,
      id: state.title + Math.random().toString(),
    };
    dispatch(poemActions.addToFavorite(favoritePoem));
    history.push("/favorite-poems");
  };
  return (
    <Card>
      <PoemDetailDiv>
        <h1>{state.title}</h1>
        <h2>{state.author}</h2>
        <p>{state.lines}</p>
      </PoemDetailDiv>
      <PoemDetailButtonWrapper>
        <Button onClick={addToFavoriteHandler}>ADD to favorites</Button>
      </PoemDetailButtonWrapper>
    </Card>
  );
};

export default PoemDetail;
