import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [randomElement, setRandomElement] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getRandom');
      setRandomElement(response.data.randomElement);
    } catch (error) {
      console.error('Error fetching random element:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>Global State App</h1>
      <button onClick={handleButtonClick}>Get Random Element</button>
      {randomElement && <p>Random Element: {randomElement}</p>}
    </div>
  );
}

export default App;
