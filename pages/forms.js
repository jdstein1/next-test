import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import InputsDemo from '../components/forms/InputsDemo';
import ButtonsDemo from '../components/forms/ButtonsDemo';
import BinariesDemo from '../components/forms/BinariesDemo';
import FormDemo from '../components/forms/FormDemo';
import Fieldset from '../components/common/Fieldset';

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
                    <div className='mx-2 my-4'>
                        <Fieldset legend='Input Groups'>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Prepend</div>
                                </div>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <button className="btn btn-primary">Prepend</button>
                                </div>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="input-group mb-2">
                                <input className="form-control" type="text"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">Append</div>
                                </div>
                            </div>
                            <div className="input-group mb-2">
                                <input className="form-control" type="text"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Append</button>
                                </div>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <button className="btn btn-primary">Prepend</button>
                                </div>
                                <input className="form-control" type="text"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">Append</div>
                                </div>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Prepend</div>
                                </div>
                                <input className="form-control" type="text"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Append</button>
                                </div>
                            </div>
                        </Fieldset>
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
