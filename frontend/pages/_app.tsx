// import App from "next/app";
// import type { AppProps /*, AppContext */ } from 'next/app'

import Head from "next/head";
// import PropTypes from "prop-types";

import wrapper from '../store/configureStore';

interface Props {
    Component: any
}

const NodeBird: React.FC<Props> = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

// NodeBird.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

export default wrapper.withRedux(NodeBird);
