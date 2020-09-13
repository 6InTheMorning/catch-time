import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const CatchTime = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>CatchTime</title>
			</Head>
			<Component />;
		</>
	);
};

CatchTime.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default CatchTime;
