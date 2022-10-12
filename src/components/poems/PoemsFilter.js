import { PoemSelect } from "../../style";
import React, { useRef } from "react";

const PoemsFilter = (props) => {
  const poemSelectRef = useRef();
  const dropChangeHandler = () => {
    props.onChangeFilter(poemSelectRef.current.value);
  };

  return (
    <PoemSelect
      onChange={dropChangeHandler}
      ref={poemSelectRef}
      name="poem-select"
      id="poem-select"
    >
      <option value="title">title</option>
      <option value="author">author</option>
    </PoemSelect>
  );
};

export default PoemsFilter;
