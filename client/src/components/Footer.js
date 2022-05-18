import { StyledFooter } from "./styled/Footer.styled"

const Footer = ({ onToggleTheme, otherTheme }) => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div>
          <a href="https://github.com/jplusequalt/letterboxd-stats">Github</a>
        </div>
        <div>
          <button className="theme-toggle" onClick={onToggleTheme}>Toggle {otherTheme} theme</button>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer