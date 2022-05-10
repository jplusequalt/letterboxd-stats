import { StyledHeader } from "./styled/Header.styled"
import { Link } from "react-router-dom"
import Logo from "./logo/Logo"

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="logo-and-links">
          <Logo />
          <Link className="link stats" to="/films?sort=top">Top Ratings</Link>
          <Link className="link stats" to="/films?sort=recent">Recent ratings</Link>
        </div>
        <Link className="link login" to="/login">Login</Link>
      </div>
    </StyledHeader>
  )
}

export default Header