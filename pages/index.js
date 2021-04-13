import axios from "axios";
import React from "react";

const query = `{ hello }`;

const App = (props) => {
  return (
    <h1>The response from the server is: {props.hello}</h1>
  );
};

export async function getStaticProps(context) {
  const response = await axios.post(`${process.env.API_URL}/api/graphql`, {
    query
  });

  return {
    props: {
      ...response.data.data,
    },
  };
}

export default App;
