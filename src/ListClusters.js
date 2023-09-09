import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListClusters() {
  const [clusters, setClusters] = useState(null);
  const backendUrl = `${process.env.REACT_APP_BACKEND_URL}`;

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        const res = await fetch(`${backendUrl}/list_clusters/`);
        const data = await res.json();
        setClusters(data.data.vke_clusters);
      } catch (error) {
        console.error('Error fetching clusters:', error);
      }
    };
  
    fetchClusters();
    const intervalId = setInterval(fetchClusters, 30000);
  
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [backendUrl]); // Include backendUrl in the dependency array

  return (
    <div className="container">
      <div className="row">
        {clusters && clusters.length > 0 ? (
          clusters.map((cluster) => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={cluster.id}>
              <div className="card" style={{ backgroundColor: '#f0f0f0', margin: '10px', padding: '10px' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#3f51b5' }}>
                    {cluster.label}
                  </h5>
                  <p className="card-text text-secondary">ID: {cluster.id}</p>
                  <p className="card-text text-secondary">IP: {cluster.ip}</p>
                  <p className="card-text text-secondary">Region: {cluster.region}</p>
                  <p className="card-text text-secondary">
                    Status: <span style={{ color: cluster.status === 'active' ? 'green' : 'red' }}>{cluster.status}</span>
                  </p>
                  {/* Add other fields as necessary */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <h6 style={{ margin: '20px' }}>
              {clusters === null ? 'Loading...' : 'No clusters available.'}
            </h6>
          </div>
        )}
      </div>
    </div>
  );  
}

export default ListClusters;
