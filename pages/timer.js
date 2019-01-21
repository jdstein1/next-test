import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import TimerDisplay from '../components/timer/TimerDisplay';

import styles from '../static/time.style';

/* this is a function component */

/* To Do:
1. [_] Disallow day values that are not possible calendar values (e.g., February 30th, April 31st).
2. [_] Allow editable "Now".
3. [_] Enable time difference to countdown.
4. [_] Allow saving countdown clocks.
*/

// console.log(styles());

const Timer = (props) => {

    const timeStyles = styles()

    return (
        <Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
            <div className='timer module'>
                <Jumbotron title={props.title}>
                    <p>{props.description}</p>
                </Jumbotron>
                <TimerDisplay now={props.now} />
            </div>
            <style jsx global>{ timeStyles }</style>
        </Layout>
    )

};

Timer.getInitialProps = async function() {
    
	return {
        title:'Timer',
        description:'Counting how much time elapsed since--or left until--a specific date.',
        currentPageIndex:5,
        now: new Date()
	}
}

export default Timer;