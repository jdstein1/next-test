import Layout from '../components/Layout';
import ClockDisplay from '../components/timer/ClockDisplay';

/* this is a function component */

const Clock = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='timer module'>
            <div className='jumbotron'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <ClockDisplay now={props.now} />
		</div>
		<style jsx global>{`
            .timer .card-body {
                padding: 0;
                padding: 1rem 0.5rem 0.5rem;
            }
            .clock {
                border:1px solid rgba(0,0,0,0.125);
                border-bottom-color:rgba(0,0,0,0.25);
                border-radius:0.5rem;
                padding:1rem;
                background:rgb(202,255,227);
                background:linear-gradient(0deg, rgba(186,186,186,0.5) 0%, rgba(227,227,227,0.5) 100%);
                box-shadow:0 0.125rem 0 0 rgba(0,0,0,0.125);
            }
            .clock .card {
                margin:0.25rem;
                border-color:rgba(152,208,186,1);
                border-bottom-color:rgba(0,0,0,0.5);
                box-shadow:0 0.125rem 0 0.025rem rgba(0,0,0,0.125);
            }
            .clock .card .card-body {
                padding:0;
            }
            .clock .card .card-title {
                overflow:hidden;
                padding:0.5rem 1.5rem;
                margin-bottom: 0;
                background: linear-gradient(0deg, rgba(152,208,186,0.5) 0%, rgba(202,255,227,0.5) 100%);
            }
            .clock .card .card-text {
                overflow:hidden;
                font-size:2rem;
                padding:0.5rem 1.5rem;
                border:0;
                border-top-left-radius:0;
                border-top-right-radius:0;
                box-shadow:
                    0 0.5rem 2rem -0.5rem rgba(51,153,102,0.75) inset, 
                    0 -0.5rem 2rem 1rem rgba(255,255,255,0.5) inset;
                background: rgb(202,255,227);
                background: linear-gradient(0deg, rgba(202,255,227,0.5) 0%, rgba(152,208,186,0.5) 100%);
            }
`}</style>
	</Layout>
);

Clock.getInitialProps = async function() {
    
	return {
        title:'Clock',
        description:'Tick, tick, tick.',
        currentPageIndex:4,
        now: new Date()
	}
}

export default Clock;