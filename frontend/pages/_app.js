import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
