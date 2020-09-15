import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import AppLayout from '../components/AppLayout';

const Home = () => {
	const [top, setTop] = useState(10);
	const [bottom, setBottom] = useState(10);

	return (
		<AppLayout>
			<div>Hello, next</div>
			<Affix offsetTop={top}>
				<ul id="demo-toc" className="toc">
					<li title="Basic" className="">
						<a href="#components-affix-demo-basic" className="">
							Basic
						</a>
					</li>
					<li title="Callback" className="">
						<a href="#components-affix-demo-on-change" className="current">
							Callback
						</a>
					</li>
					<li title="Container to scroll." className="">
						<a href="#components-affix-demo-target" className="">
							Container to scroll.
						</a>
					</li>
					<li title="API">
						<a href="#API" className="">
							API
						</a>
					</li>
				</ul>
			</Affix>
		</AppLayout>
	);
};

export default Home;
