import { Link } from "react-router-dom"
import { StyledHome } from "./styled/Home.styled"


const Home = () => {
  return (
    <StyledHome>
      <div>
        <div className="home-container">
          <div className="jumbotron">
            <h1>View your Letterboxd stats</h1>
            <p><span className="directions">Import your Letterboxd stats from your Letterboxd account below</span></p>
            <div className="import-container">
              <input type="file" id="file-import"></input>
              <label className="import-mask" htmlFor="file-import">Import Your Data</label>
            </div>
          </div>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home