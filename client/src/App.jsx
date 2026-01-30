import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/home';

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('URl Error not Getting response from URL');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('Data Erorr');
        }

        setUserData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please Wait Loading is in progress</h1>;
  if (error) return <h1>Error Occured in The Server</h1>;
  if (!userData) return <h1>No data available</h1>;
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default App;
