import { PoemsHeader } from "../../style";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";

const MainHeader = (props) => {
  return (
    <Fragment>
      <PoemsHeader>
        <h1>POEMS</h1>
        <MainNavigation />
      </PoemsHeader>
      {props.children}
    </Fragment>
  );
};

export default MainHeader;
