import Layout from '../components/Layout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

/* this is a function component */

const Forms = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <div className='jumbotron'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className='row'>
                <div className="col-6">
                    <div className=''>
                        <legend>Inputs</legend>
                        <Input type='' attrs={{value:['jdsfgjdhfgh'], id:'input1'}}></Input>
                        <Input type='text' attrs={{value:['jdsfgjdhfgh'], id:'text1'}}>Text</Input>
                        <Input type='color' attrs={{value:['#66dd99'], id:'color1'}}>Color</Input>
                        <Input type='email' attrs={{value:['jdfghg@kdjhfkgfhj.com'], id:'email1'}}>Email</Input>
                        <Input type='datetime-local' attrs={{value:['2017-06-01T08:30'], id:'datetime1'}}>Date Time Local</Input>
                        <Input type='number' attrs={{value:[84576], id:'number1'}}>Number</Input>
                    </div>
                    <div className=''>
                        <legend>Select/Option</legend>
                        <Input type='select' attrs={{value:[
                            'select/option jsdghkdf',
                            'select/option ruiuherg',
                            'select/option gfdhueur',
                            'select/option fkgshidh'
                        ], selected:2, id:'select1'}}>Select/Option</Input>
                    </div>
                    <div className=''>
                        <legend>Textarea</legend>
                        <Input type='textarea' attrs={{value:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?'], id:'textarea1'}}>Textarea</Input>
                    </div>
                </div>
                <div className="col-6">
                    <div className=''>
                        <legend>Input Buttons</legend>
                        <Input type='submit' attrs={{value:['Submit'], id:'button1', flavor:'dark'}} />
                        <Input type='reset' attrs={{value:['Reset'], id:'button1', flavor:'primary'}} />
                        <Input type='button' attrs={{value:['Button'], id:'button2', flavor:'secondary'}} />
                    </div>
                    <div className=''>
                        <legend>Buttons</legend>
                        <Button type='button' attrs={{value:['jhfgdbhjdf'], id:'button1', flavor:'dark'}}>Button 1</Button>
                        <Button type='button' attrs={{value:['dfgfbghjuf'], id:'button1', flavor:'primary'}}>Button 1</Button>
                        <Button type='button' attrs={{value:['deruykgmnv'], id:'button2', flavor:'secondary'}}>Button 2</Button>
                    </div>
                    <div className=''>
                        <legend>Buttons (group)</legend>
                        <div className="input-group">
                            <Button type='button' attrs={{value:['bvfhjsgodf'], id:'button-group1', flavor:'dark'}}>Button 1</Button>
                            <Button type='button' attrs={{value:['jdsfgjdhfg'], id:'button-group1', flavor:'primary'}}>Button 1</Button>
                            <Button type='button' attrs={{value:['fgweiruvwv'], id:'button-group2', flavor:'secondary'}}>Button 2</Button>
                        </div>
                    </div>
                    <div className=''>
                        <legend>Binary Inputs</legend>
                        <Input type='checkbox' attrs={{value:[
                            'Checkbox (JSD)',
                            'Checkbox (RUI)',
                            'Checkbox (GFD)',
                            'Checkbox (FKG)'
                        ], selected:1, id:'checkbox1'}}>Checkbox</Input>
                        <Input type='radio' attrs={{value:[
                            'Radio (JSD)',
                            'Radio (RUI)',
                            'Radio (GFD)',
                            'Radio (FKG)'
                        ], selected:2, id:'radio1'}}>Radio</Input>
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
            .form-group {
                border-bottom:1px solid #eee;
            }
        `}</style>
	</Layout>
);

Forms.getInitialProps = async function() {
    
	return {
        title:'Forms',
        description:'Playground for new components.',
        currentPageIndex:6
	}
}

export default Forms;