import React, { useState } from 'react';
import ClusterResponse from './ClusterResponse'; // Adjust the path as necessary

function CreateCluster() {
  const [response, setResponse] = useState(null);
  const backendUrl = `${process.env.REACT_APP_BACKEND_URL}`;

  const createCluster = async () => {
    try {
      const res = await fetch(`${backendUrl}/create_clusters/`, { method: 'POST' });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error creating cluster:', error);
    }
  };

  return (
    <div>
      <button onClick={createCluster} className="btn btn-primary">
        Create Cluster
      </button>
      {response && <ClusterResponse data={response.data} />}
    </div>
  );
}

export default CreateCluster;
