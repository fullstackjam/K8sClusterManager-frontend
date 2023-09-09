import React from 'react';
import './App.css';
import CreateCluster from './CreateCluster';
import ListClusters from './ListClusters';
import DeleteCluster from './DeleteCluster';

function App() {
  return (
    <div className="App">
      <h1>Vultr Kubernetes Cluster Manager</h1>
      <ListClusters />
      <CreateCluster />
      <DeleteCluster />
    </div>
  );
}

export default App;