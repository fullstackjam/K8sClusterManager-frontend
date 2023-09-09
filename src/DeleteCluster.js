import React, { useState } from 'react';

function DeleteCluster() {
  const [vkeId, setVkeId] = useState('');
  const [message, setMessage] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  const handleDelete = async () => {
    try {
      const response = await fetch(`${backendUrl}/delete_cluster/${vkeId}`, { method: 'DELETE' });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to delete cluster');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Delete VKE Cluster</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={vkeId}
          onChange={(e) => setVkeId(e.target.value)}
          placeholder="Enter VKE ID"
        />
      </div>
      <button onClick={handleDelete} className="btn btn-danger mb-3">Delete</button>
      {message && <p className={message.includes('Failed') ? 'text-danger' : 'text-success'}>{message}</p>}
    </div>
  );
}

export default DeleteCluster;
