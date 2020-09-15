import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';

import LoginForm from './LoginForm';
const dummy = {
	nickname: '제로초',
	Post: [],
	Followings: [],
	Followers: [],
	isLoggedIn: false,
};

const AppLayout = ({ children }) => (
	<div>
		<Menu mode="horizontal">
			<Menu.Item key="main">
				<Link href="/">
					<a>노드버드</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="profile">
				<Link href="/profile">
					<a>프로필</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="mail">
				<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
			</Menu.Item>
			{/* <Menu.Item key="signup">
				<Link href="/signup">회원가입</Link>
			</Menu.Item> */}
		</Menu>
		<Row gutter={8}>
			<Col xs={24} md={6}>
				<a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">
					Made by ZeroCho
				</a>
			</Col>
			<Col xs={24} md={12}>
				{children}
			</Col>
			<Col xs={24} md={6}>
				{dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
			</Col>
		</Row>
	</div>
);

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
