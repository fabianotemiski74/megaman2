import React from 'react';
import axios from 'axios';
import './App.css';

const {REACT_APP_BASEURL: BASEURL} = process.env;
const BossColor = {
  // Megaman 2
    "Metal Man": "red",
    "Air Man": "blue",
    "Bubble Man": "green",
    "Quick Man": "#cb5b06",
    "Crash Man": "#DE4463",
    "Flash Man": "#73D5FF",
    "Heat Man": "#842A27",
    "Wood Man": "#AF7C2B",
  // megaman 3
    "Needle Man": "#00125C",
    "Magnet Man": "#FF7A59",
    "Gemini Man": "#BAFFFF",
    "Hard Man": "#0791FF",
    "Top Man": "#DE4826",
    "Snake Man": "#A6BE04",
    "Spark Man": "#DB8672",
    "Shadow Man": "#1385FF",
  // megaman 4
    "Bright Man": "#390000",
    "Toad Man": "#84D40F",
    "Drill Man": "#EE7F6D",
    "Pharaoh Man": "#F79E48",
    "Ring Man": "#9D462C",
    "Dust Man": "#BFBFBF",
    "Dive Man": "#0270F4",
    "Skull Man": "#FFFFFF",
  // megaman 5
    "Gravity Man": "#BE4B2A",
    "Wave Man": "#84D40F",
    "Stone Man": "#C96724",
    "Gyro Man": "#00A700",
    "Star Man": "#C46823",
    "Charge Man": "#F9775C",
    "Napalm Man": "#0877E1",
    "Crystal Man": "#01AA00",
}

function App() {
  const [bossList, setBossList] = React.useState([]);

  React.useEffect(() => {
    axios.get(BASEURL).then((response) => {
      setBossList(response.data);
    })
  }, [])

  return (
    <div className="App">
      {bossList.map((boss) =>
        <div className="boss" style={{backgroundColor: BossColor[boss.name]}}>
          <span>{boss.name}</span>
          {/* <img src={boss.avatar} alt={boss.name} /> */}
        </div>
      )}
    </div>
  );
}

export default App;