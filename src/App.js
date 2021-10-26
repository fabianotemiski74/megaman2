import React from 'react';
import axios from 'axios';
import './App.css';

const {REACT_APP_BASEURL: BASEURL} = process.env;

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
        <div>
          <span>{boss.name}</span>
          <img src={boss.avatar} alt={boss.name} />
        </div>
      )}
    </div>
  );
}

export default App;
