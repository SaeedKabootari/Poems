import { PoemListUl, ButtonWrapper } from "../../style";
import PoemItem from "./PoemItem";
import PoemsFilter from "./PoemsFilter";
import React, { Fragment, useState } from "react";

const PoemsList = (props) => {
  const mainArray = [...props.items];

  const [poemsForShow, setPoemsForShow] = useState(mainArray);

  const poemsFilterHandler = (filterType) => {
    const arrayForSort = [...props.items];
    if (filterType === "title") {
      const titleSortedPoems = arrayForSort.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      setPoemsForShow(titleSortedPoems);
    }
    if (filterType === "author") {
      const authorSortedPoems = arrayForSort.sort((a, b) =>
        a.author > b.author ? 1 : b.author > a.author ? -1 : 0
      );
      setPoemsForShow(authorSortedPoems);
    }
  };

  return (
    <Fragment>
      <PoemListUl>
        {poemsForShow.map((item) => (
          <PoemItem
            author={item.author}
            title={item.title}
            key={item.title}
            id={item.title}
            lines={item.lines}
          />
        ))}
      </PoemListUl>
      <ButtonWrapper>
        <PoemsFilter onChangeFilter={poemsFilterHandler} />
      </ButtonWrapper>
    </Fragment>
  );
};

export default PoemsList;
