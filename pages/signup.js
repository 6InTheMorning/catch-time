import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Signup = () => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>회원가입 | CatchTime</title>
			</Head>
			<AppLayout>
				<div>회원가입</div>
			</AppLayout>
		</>
	);
};

export default Signup;
