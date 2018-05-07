import Layout from '../components/Layout';
import TimerDisplay from '../components/timer/TimerDisplay';
import ClockDisplay from '../components/timer/ClockDisplay';

/* this is a function component */

/* To Do:
1. [_] Disallow day values that are not possible calendar values (e.g., February 30th, April 31st).
2. [_] Allow editable "Now".
3. [_] Enable time difference to countdown.
4. [_] Allow saving countdown clocks.
*/

const Timer = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='timer module'>
            <div className='jumbotron'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <TimerDisplay />
            <ClockDisplay />
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