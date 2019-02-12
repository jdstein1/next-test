import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import FormDemo from '../components/demos/FormDemo';
import InputsDemo from '../components/demos/InputsDemo';
import ButtonsDemo from '../components/demos/ButtonsDemo';
import BinariesDemo from '../components/demos/BinariesDemo';
import InputGroupsDemo from '../components/demos/InputGroupsDemo';
// import Fieldset from '../components/common/Fieldset';

/* this is a function component */

const Forms = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <div className='row'>
                <div className='col-sm'>
                    <div className='mx-2 my-4'>
                        <InputsDemo title='Basic Inputs Demo' />
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='mx-2 my-4'>
                        <BinariesDemo title='Binary Inputs Demo' />
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='mx-2 my-4'>
                        <ButtonsDemo title='Buttons Demo' />
                    </div>
                    <div className='mx-2 my-4'>
                        <InputGroupsDemo title='Input Groups Demo' />
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
