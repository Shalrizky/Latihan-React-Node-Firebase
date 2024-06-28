import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data')  // Tidak perlu menuliskan port, proxy akan mengurusnya
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {data ? (
        <ul>
          <li>
            {data.username} ({data.uid}) - {data.languagePref} - {data.userImg}
          </li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
