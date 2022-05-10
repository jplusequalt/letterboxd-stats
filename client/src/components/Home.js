import { Link } from "react-router-dom"
import { StyledHome } from "./styled/Home.styled"


const Home = () => {
  return (
    <StyledHome>
      <div className="main-container">
        <div className="jumbotron">
          <h1>View your Letterboxd stats</h1>
          <p>Login with your Letterboxd account to see stats about your favorite films</p>
          <Link className="link login-button" to="/login">Login to Letterboxd</Link>
          <p>Or import your data <span className="directions">directly</span></p>
          <input type="file"></input>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home