import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import FormDemo from '../components/demos/FormDemo';

/* this is a function component */

const Contact = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <div className='row'>
                <div className='col'>
                    <div className='mx-2 my-4'>
                        <FormDemo title='Contact Form' />
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
        `}</style>
	</Layout>
);

Contact.getInitialProps = async function() {
    
	return {
        title: 'Contact',
        description: 'A contact form',
        currentPageIndex: 11
	}
}

export default Contact;
