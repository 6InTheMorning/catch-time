import React from 'react';
import { Devider, Steps } from 'antd';
import AppLayout from '../components/AppLayout';

const Home = () => {
	const { Step } = Steps;

	return (
		<AppLayout>
			<div>Hello, next</div>
			<Steps progressDot current={1} direction="vertical">
				<Step
					title="Finished"
					key="step_1"
					description={[
						<div>컴온</div>,
						<div>컴온</div>,
						<div>컴온</div>,
						<div>컴온</div>,
						<div>컴온</div>,
						<div>컴온</div>,
					]}
				/>
				<Step title="Finished" description="This is a description. This is a description." />
				<Step title="In Progress" description="This is a description. This is a description." />
				<Step title="Waiting" description="This is a description." />
				<Step title="Waiting" description="This is a description." />
			</Steps>
		</AppLayout>
	);
};

export default Home;
