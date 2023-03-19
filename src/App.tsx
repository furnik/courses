import React from 'react';
import {RoutesContainer} from "./Routes";
import {useAuth} from "./hooks/auth";
import {Layout} from "./components/Layout";

function App() {
  useAuth();
  return (
    <Layout>
      <RoutesContainer />
    </Layout>
  );
}

export default App;
