import React, { useState } from 'react';
import { Affix, Button, U } from 'antd';
import AppLayout from '../components/AppLayout';

const Home = () => {
	const [top, setTop] = useState(10);
	const [bottom, setBottom] = useState(10);

	return (
		<AppLayout>
			<div>Hello, next</div>
			<Affix offsetTop={top}>
				<ul id="demo-toc" class="toc">
					<li title="Basic" class="">
						<a href="#components-affix-demo-basic" class="">
							Basic
						</a>
					</li>
					<li title="Callback" class="">
						<a href="#components-affix-demo-on-change" class="current">
							Callback
						</a>
					</li>
					<li title="Container to scroll." class="">
						<a href="#components-affix-demo-target" class="">
							Container to scroll.
						</a>
					</li>
					<li title="API">
						<a href="#API" class="">
							API
						</a>
					</li>
				</ul>
			</Affix>
		</AppLayout>
	);
};

export default Home;
