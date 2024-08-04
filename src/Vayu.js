import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Team2 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios.get('https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0003/latest')
      .then(response => {
        console.log('API response:', response.data); // Log the response data
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000); // Refresh data every 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderTableData = () => {
    if (!data || !data["m2m:cin"]) return null;

    const { con, lbl } = data["m2m:cin"];

    // Clean and parse the con string
    const cleanConString = con.replace(/'/g, '"'); // Replace single quotes with double quotes
    let conArray;
    try {
      conArray = JSON.parse(cleanConString);
    } catch (e) {
      console.error('Failed to parse con string:', e);
      return <div>Failed to parse con string</div>;
    }

    // Ensure conArray and lbl are of the same length
    if (conArray.length !== lbl.length) {
      console.error('Mismatch between con array and lbl array lengths');
      return <div>Data mismatch error</div>;
    }

    return lbl.map((label, index) => (
      <div key={index} className="parameter">
        <table>
          <thead >
            <tr>
              <th>{label}</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            <tr>
              <td>{conArray[index]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div>
      <h1 className="eco">Vayu</h1>
      <div className="container">
        {renderTableData()}
      </div>
    </div>
  );
};

export default Team2;
