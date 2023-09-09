import React from 'react';

function ClusterResponse({ data }) {
  return (
    <div className="card" style={{ margin: '20px', padding: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">Cluster Created Successfully</h5>
        <p className="card-text text-secondary">ID: {data.vke_cluster.id}</p>
        <p className="card-text text-secondary">Label: {data.vke_cluster.label}</p>
        <p className="card-text text-secondary">IP: {data.vke_cluster.ip}</p>
        <p className="card-text text-secondary">Endpoint: {data.vke_cluster.endpoint}</p>
        <p className="card-text text-secondary">Version: {data.vke_cluster.version}</p>
        <p className="card-text text-secondary">Region: {data.vke_cluster.region}</p>
        <p className="card-text text-secondary">Status: {data.vke_cluster.status}</p>
        {/* Add other fields as necessary */}
      </div>
    </div>
  );
}

export default ClusterResponse;
