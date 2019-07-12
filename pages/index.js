import React from "react";
import axios from "axios";

const query = `{ hello }`;

const App = props => <h1>The response from the server is: {props.hello}</h1>;

App.getInitialProps = async () => {
  const response = await axios.post(`${process.env.API_URL}/api/graphql`, {
    query
  });

  return { ...response.data.data };
};

export default App;
