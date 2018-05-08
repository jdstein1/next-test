import Layout from '../components/Layout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

/* this is a function component */

const Test = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <div className='jumbotron'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className='row form-group'>
                <div className="col-6">
                    {/* <Input type='' attrs='' label='' /> */}
                        <h3>Inputs</h3>
                    <div className='form-group'>
                        <Input type='text' attrs={{value:['jdsfgjdhfgh'], id:'button1'}}></Input>
                        <Input type='text' attrs={{value:['jdsfgjdhfgh'], id:'text1'}}>Text</Input>
                        <Input type='color' attrs={{value:['#66dd99'], id:'color1'}}>Color</Input>
                        <Input type='email' attrs={{value:['jdfghg@kdjhfkgfhj.com'], id:'email1'}}>Email</Input>
                        <Input type='datetime-local' attrs={{value:['2017-06-01T08:30'], id:'datetime1'}}>Date Time Local</Input>
                        <Input type='number' attrs={{value:[84576], id:'number1'}}>Number</Input>
                    </div>
                    <hr/>
                        <h3>Input Buttons</h3>
                    <div className='form-group'>
                        <Input type='submit' attrs={{value:['Submit'], id:'button1', flavor:'dark'}} />
                        <Input type='reset' attrs={{value:['Reset'], id:'button1', flavor:'primary'}} />
                        <Input type='button' attrs={{value:['Button'], id:'button2', flavor:'secondary'}} />
                    </div>
                    <hr/>
                        <h3>Buttons (group)</h3>
                    <div className='form-group'>
                        <div className="input-group">
                            <Button type='button' attrs={{value:['jdsfgjdhfgh'], id:'button1', flavor:'primary'}}>Button 1</Button>
                            <Button type='button' attrs={{value:['fgweiruvwvw'], id:'button2', flavor:'secondary'}}>Button 2</Button>
                        </div>
                    </div>
                    <hr/>
                        <h3>Textarea</h3>
                    <div className='form-group'>
                        <Input type='textarea' attrs={{value:['Hre khjfge kjrh ergkjgh ekjr...'], id:'textarea1'}}>Textarea</Input>
                    </div>
                    <hr/>
                        <h3>Select/Option</h3>
                    <div className='form-group'>
                        <Input type='select' attrs={{value:[
                            'select jsdghkdf',
                            'select ruiuherg',
                            'select gfdhueur',
                            'select fkgshidh'
                        ], selected:2, id:'select1'}}>Select/Option</Input>
                    </div>
                    <hr/>
                        <h3>Binary Inputs</h3>
                    <div className='form-group'>
                        <Input type='checkbox' attrs={{value:[
                            'checkbox jsdghkdf',
                            'checkbox ruiuherg',
                            'checkbox gfdhueur',
                            'checkbox fkgshidh'
                        ], selected:2, id:'checkbox1'}}>Checkbox</Input>
                        <Input type='radio' attrs={{value:[
                            'radio jsdghkdf',
                            'radio ruiuherg',
                            'radio gfdhueur',
                            'radio fkgshidh'
                        ], selected:2, id:'radio1'}}>Radio</Input>
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
        `}</style>
	</Layout>
);

Test.getInitialProps = async function() {
    
	return {
        title:'Test',
        description:'Playground for new components.',
        currentPageIndex:6
	}
}

export default Test;