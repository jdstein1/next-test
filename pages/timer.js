import Layout from '../components/Layout';
import TimerDisplay from '../components/timer/TimerDisplay';

/* this is a function component */

const Timer = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='timer module'>
            <div className='jumbotron'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <TimerDisplay />
		</div>
		<style jsx local>{`
			.timer {
				// border:0.25em solid orange;
			}
	`}</style>
	</Layout>
);

Timer.getInitialProps = async function() {
    
	return {
        title:'Timer',
        description:'Counting how much time elapsed since--or left until--a specific date.',
        currentPageIndex:4
	}
}

export default Timer;