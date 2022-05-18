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
          <p>Import Your Data</p>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header