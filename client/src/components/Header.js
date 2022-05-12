import { StyledHeader } from "./styled/Header.styled"
import { Link } from "react-router-dom"
import Logo from "./logo/Logo"

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div className="header-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="header-links">
            <div>
              <Link className="link stats" to="/films?sort=top">Top Ratings</Link>
              <Link className="link stats" to="/films?sort=recent">Recent ratings</Link>
            </div>
            <Link className="link login" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header