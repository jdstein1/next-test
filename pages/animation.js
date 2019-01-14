import Layout from '../components/Layout';
import Transitions from '../components/animation/Transitions';
import Keyframes from '../components/animation/Keyframes';
import Jumbotron from '../components/common/Jumbotron';

const BPI = (props) => (
	<Layout msgs={props.messages} activePageIndex={props.currentPageIndex}>
		<div className='animation module'>
            <Jumbotron title={props.title} />
            <Transitions />
            <Keyframes />
        </div>
        <style jsx global>{`
            .basic {
                color:black;
                background-color:#ddd;
                font-size:1rem;
                margin:0 0.25rem 0.25rem 0;
                padding:0.25rem 0.5rem;
            }
		`}</style>
	</Layout>
);

BPI.getInitialProps = async function() {


	return {
		title:'CSS Animation',
		currentPageIndex:7,
		messages: [
			{id:1, kind:'info', text:'Lorem ipsum dolor sic amet...', lede:'CSS Animation Warning'}
		]
	}
}

export default BPI;
