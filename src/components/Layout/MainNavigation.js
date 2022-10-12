import { MainNavUl, MainNavLi, StyledNavLink } from "../../style";

const MainNavigation = (props) => {
  return (
    <MainNavUl>
      <MainNavLi>
        <StyledNavLink to="/poems">poems</StyledNavLink>
      </MainNavLi>
      <MainNavLi>
        <StyledNavLink to="/favorite-poems">favorite poems</StyledNavLink>
      </MainNavLi>
    </MainNavUl>
  );
};

export default MainNavigation;
