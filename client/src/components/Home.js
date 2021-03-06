import { useState } from "react"
import { Link } from "react-router-dom"
import { StyledHome } from "./styled/Home.styled"
import Info from "./Info"


const Home = ({ handleUpload }) => {

  const [showInfo, setShowInfo] = useState(false)

  return (
    <StyledHome>
      <div>
        <div className="home-container">
          <div className="jumbotron">
            <h1>View your Letterboxd stats</h1>
            <p>
              <span className="directions" onClick={() => setShowInfo(!showInfo)}>
                Import your Letterboxd stats from your Letterboxd account below
              </span>
            </p>
            <div className="import-container">
              <input type="file" id="file-import" onChange={handleUpload} multiple accept=".zip" />
              <label className="import-mask" htmlFor="file-import">Import Your Data</label>
            </div>
          </div>
        </div>
      </div>
      {
        showInfo ?
          <Info />
          : null
      }
    </StyledHome>
  )
}

export default Home