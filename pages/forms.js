import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import InputsDemo from '../components/forms/InputsDemo';
import ButtonsDemo from '../components/forms/ButtonsDemo';
import BinariesDemo from '../components/forms/BinariesDemo';
import FormDemo from '../components/forms/FormDemo';

/* this is a function component */

const Forms = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <div className='row'>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <InputsDemo title='Inputs Demo' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <BinariesDemo title='Binaries Demo' />
                    </div>
                    <div className='mx-2 my-4'>
                        <ButtonsDemo title='Buttons Demo' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <FormDemo title='Form Demo' />
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
        `}</style>
	</Layout>
);

Forms.getInitialProps = async function() {
    
	return {
        title: 'Forms',
        description: 'A sandbox for HTML form components',
        currentPageIndex: 6
	}
}

export default Forms;
