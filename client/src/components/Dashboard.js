import { StyledDashboard } from "./styled/Dashboard.styled"
import Plot from 'react-plotly.js'

const Dashboard = ({ userData }) => {
  return (
    <StyledDashboard>
      <div className="plot-container">
        <Plot
          data={[
            {
              x: userData.map(entry => entry.Rating),
              y: userData.map(entry => entry.Name),
              type: "bar",
              orientation: "h"
            }
          ]}
        />
      </div>
    </StyledDashboard>
  )
}

export default Dashboard