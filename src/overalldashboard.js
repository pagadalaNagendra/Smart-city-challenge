import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './overalldashboard.css';

const DataComponent = ({ title, apiUrl }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios.get(apiUrl)
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
    const intervalId = setInterval(fetchData, 7000); // Refresh data every 10 seconds

    return () => clearInterval(intervalId);
  }, [apiUrl]);

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
          <thead  >
            <tr>
              <th>{label}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{conArray[index]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div className="data-component">
      <h1 className="page-title">{title}</h1>
      <div className="container">
        {renderTableData()}
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div className="combined-component">
      <DataComponent title="Eco-Sense" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0002/latest" />
      <DataComponent title="Vayu" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0003/latest" />
      <DataComponent title="Radiance" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0004/latest" />
      <DataComponent title="Horus" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0005/latest" />
      <DataComponent title="Antar Iot" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0006/latest" />
      <DataComponent title="Yantra Electronics" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0007/latest" />
      <DataComponent title="WareBot" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0008/latest" />
      <DataComponent title="Dbr Innovative Tech Team" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0009/latest" />
      <DataComponent title="Hydrowverse" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0010/latest" />
      <DataComponent title="Nudron" apiUrl="https://ctop.iiit.ac.in/api/nodes/get-node/SC03-0032-0011/latest" />
    </div>
  );
};

export default CombinedComponent;
