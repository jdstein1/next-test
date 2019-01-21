import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import ClockDisplay from '../components/timer/ClockDisplay';

import styles from '../static/time.style';

/* this is a function component */

const Clock = (props) => {

    const timeStyles = styles()

    return (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='timer module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <ClockDisplay now={props.now} />
		</div>
		<style jsx global>{ timeStyles }</style>
	</Layout>
)};

Clock.getInitialProps = async function() {
    
	return {
        title:'Clock',
        description:'Tick, tick, tick.',
        currentPageIndex:4,
        now: new Date()
	}
}

export default Clock;