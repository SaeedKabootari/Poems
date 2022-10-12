import { PoemListUl, PoemsFetchMessageDiv } from "../../style";
import Card from "../UI/Card";
import FavoritePoemItem from "./FavoritePoemItem";
import { useSelector } from "react-redux";

const FavoritesPoems = (props) => {
  const favoritePoems = useSelector((state) => state.poem.favoritePoems);

  let content = (
    <PoemsFetchMessageDiv>
      <p>No favorite poem.</p>
    </PoemsFetchMessageDiv>
  );

  favoritePoems.length !== 0 &&
    (content = (
      <PoemListUl>
        {favoritePoems.map((item) => (
          <FavoritePoemItem
            title={item.title}
            author={item.author}
            key={item.id}
            id={item.id}
          />
        ))}
      </PoemListUl>
    ));

  return <Card>{content}</Card>;
};

export default FavoritesPoems;
