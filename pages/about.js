import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import FormDemo from '../components/demos/FormDemo';

/* this is a function component */

const About = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <div className='row'>
                <div className='col'>
                    <div className='mx-2 my-4'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, consequuntur voluptas. Accusantium corporis harum ad? Voluptatem beatae eaque assumenda iure debitis blanditiis maxime ipsam exercitationem, aliquam culpa aspernatur? Provident, ipsum!</p>
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
        `}</style>
	</Layout>
);

About.getInitialProps = async function() {
    
	return {
        title: 'About',
        description: 'An about page',
        currentPageIndex: 10
	}
}

export default About;
