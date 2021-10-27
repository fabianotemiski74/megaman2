import React from 'react';
import axios from 'axios';
import './App.css';
import { BossColor } from './utils';

const {REACT_APP_BASEURL: BASEURL} = process.env;

function App() {
  const style = (bossName) => {
    return {
      backgroundColor: BossColor[bossName].background,
      color: BossColor[bossName].color
    }
  }
  const [bossList, setBossList] = React.useState([]);

  React.useEffect(() => {
    axios.get(BASEURL).then((response) => {
      setBossList(response.data);
    })
  }, [])

  return (
    <div className="App">
      {bossList.map((boss) =>
        <div className="boss" style={style(boss.name)}>
          <span>{boss.name}</span>
          {/* <img src={boss.avatar} alt={boss.name} /> */}
        </div>
      )}
    </div>
  );
}

export default App;