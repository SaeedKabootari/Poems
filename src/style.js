import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

//Card.js
export const CardDiv = styled.div`
  width: 90%;
  max-width: 50rem;
  background-color: ${(props) => (props.color ? props.color : "white")};
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

//Button.js
export const Btn = styled.button`
  font: inherit;
  color: #fff;
  background-color: #42855b;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #42855b;
  &:hover,
  &:active {
    background-color: #90b77d;
    border-color: #90b77d;
    color: #fff;
  }
`;

//PoemsList.js
export const PoemListUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

//PoemItem.js
export const PoemLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

//PoemsFilter.js
export const PoemSelect = styled.select`
  padding: 0.75rem 1.5rem;
  font: inherit;
  color: #fff;
  background-color: #42855b;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #42855b;
`;

//Poems.js
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PoemsFetchMessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: #fff;
  background-color: #42855b;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #42855b;
  &:hover,
  &:active {
    background-color: #90b77d;
    border-color: #90b77d;
    color: #fff;
  }
`;

//PoemItem.js
export const CardGreenLight = styled(CardDiv)`
  background: #d2d79f;
`;

//PoemDetail.js
export const PoemDetailDiv = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  background: #d2d79f;
  border-radius: 6px;
`;

export const PoemDetailButtonWrapper = styled.div`
  margin: 0.5rem;
`;

//FavoritePoemItem.js
export const CardGreen = styled(CardDiv)`
  background: #90b77d;
`;

//MainHeader.js
export const PoemsHeader = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #d2d79f;
  h1 {
    color: #fff;
  }
`;

//MainNavigation.js
export const MainNavUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MainNavLi = styled.li`
  margin-left: 1.5rem;
  font-size: 1.25rem;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #90b77d;
  &:hover,
  &:active {
    color: #42855b;
  }
  &.active {
    color: #483838;
  }
`;
