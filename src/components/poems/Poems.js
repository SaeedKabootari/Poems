import { ButtonWrapper, PoemsFetchMessageDiv } from "../../style";
import Button from "../UI/Button";
import Card from "../UI/Card";
import PoemsList from "./PoemsList";
import React, { useState } from "react";
import { useGetTwentyRandomPoemsQuery } from "../../services/poemApi";

const Poems = (props) => {
  const [send, setSend] = useState(false);
  const { data, isLoading, isError, isSuccess } = useGetTwentyRandomPoemsQuery(
    send,
    { skip: !send }
  );

  const fetchPoemsHandler = () => {
    setSend(true);
  };

  let content;

  isError &&
    (content = (
      <PoemsFetchMessageDiv>
        <p>something went wrong...</p>
      </PoemsFetchMessageDiv>
    ));

  isLoading &&
    (content = (
      <PoemsFetchMessageDiv>
        <p>poems is loading ...</p>
      </PoemsFetchMessageDiv>
    ));

  isSuccess && (content = <PoemsList items={data} />);

  return (
    <Card>
      {content}
      {!send && (
        <ButtonWrapper>
          <Button onClick={fetchPoemsHandler}>Fetch Poems</Button>
        </ButtonWrapper>
      )}
    </Card>
  );
};

export default Poems;
