import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/ButtonGroup';

/* this is a function component */

const Forms = (props) => (
	<Layout msgs={props.messages} pages={props.pages} activePageIndex={props.currentPageIndex}>
		<div className='test module'>
            <Jumbotron title={props.title}>
                <p>{props.description}</p>
            </Jumbotron>
            <div className='row'>
                <div className='col-4'>
                    <h3>Form Inputs</h3>
                    <div className='mx-2 my-4'>
                        <legend>Inputs</legend>
                        <Input type='' 
                            label=''
                            hint='This field has no type'
                            items={[
                                {id:'input1'}
                            ]} />
                        <Input type='text' 
                            label='Text'
                            hint='This field is a text input'
                            items={[
                                { value:'', id:'text1'}
                            ]} />
                        <Input type='password' 
                            label='Password'
                            hint='Passwords must have 64 characters: 16 of [A-Za-z], 14 of [0-9], and 34 of [~!@#$%^*()_]'
                            items={[
                                { value:'bdfhvjguiteu', id:'password1'}
                            ]} />
                        <Input type='color' 
                            label='Color'
                            items={[
                                { value:'#66dd99', id:'color1'}
                            ]} />
                        <Input type='email' 
                            label='Email'
                            items={[
                                { value:'jdfghg@kdjhfkgfhj.com', id:'email1'}
                            ]} />
                        <Input type='datetime-local' 
                            label='Date Time Local'
                            items={[
                                { value:'2017-06-01T08:30', id:'datetime1'}
                            ]} />
                        <Input type='number' 
                            label='Number'
                            items={[
                                {value:84576, id:'number1'}
                            ]} />
                    </div>
                    <div className='mx-2 my-4'>
                        <legend>Select/Option</legend>
                        <Input type='select' 
                            label='Select/Option'
                            items={[
                                { value:'Select/Option 1'},
                                { value:'Select/Option 2', selected:true},
                                { value:'Select/Option 3'},
                                { value:'Select/Option 4'}
                            ]}
                            id='select1' />
                    </div>
                    <div className='mx-2 my-4'>
                        <legend>Textarea</legend>
                        <Input type='textarea' 
                            label='Textarea'
                            items={[
                                { value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?'}
                            ]}
                            id='textarea1' />
                    </div>
                </div>
                <div className='col-4'>
                    <h3>Binary Inputs</h3>
                    <div className='mx-2 my-4'>
                        <Input type='radio' 
                            label='Radio (true/false)'
                            items={[
                                { value:'True'},
                                { value:'False', selected:true}
                            ]}
                            id='radios1'/>
                        <Input type='checkbox' 
                            label='Checkbox (true/false)'
                            items={[
                                { value:''}
                            ]}
                            id='checkboxes1'
                            hint='Toggle' />
                        <Input type='radio' 
                            label='Radio (multi)'
                            items={[
                                { value:'Radio 1'},
                                { value:'Radio 2'},
                                { value:'Radio 3', selected:true},
                                { value:'Radio 4'}
                            ]}
                            id='radios2'
                            hint='Pick one' />
                        <Input type='checkbox' 
                            label='Checkbox (multi)'
                            items={[
                                { value:'Checkbox 1', selected:true},
                                { value:'Checkbox 2'},
                                { value:'Checkbox 3'},
                                { value:'Checkbox 4'}
                            ]}
                            id='checkboxes2'
                            hint='Pick many' />
                    </div>
                </div>
                <div className='col-4'>
                    <h3>Buttons</h3>
                    <div className='mx-2 my-4'>
                        <fieldset className='form-group'>
                            <legend>Input Buttons</legend>
                            <Input type='submit' 
                                label='Submit'
                                items={[
                                    { value:'Submit', id:'button1', flavor:'dark' }
                                ]} />
                            <Input type='reset' 
                                label='Reset'
                                items={[
                                    { value:'Reset', id:'button2', flavor:'primary' }
                                ]} />
                            <Input type='button' 
                                label='Button'
                                items={[
                                    { value:'Button', id:'button3', flavor:'secondary' }
                                ]} />
                        </fieldset>
                    </div>
                    <div className='mx-2 my-4'>
                        <fieldset className='form-group'>
                            <legend>Buttons</legend>
                            <Button type='button' 
                                label='Button 1a'
                                item={{ value:'Button 1a', id:'button1a', flavor:'dark' }} />
                            <Button type='button' 
                                label='Button 2a'
                                item={{ value:'Button 2a', id:'button2a', flavor:'primary' }} />
                            <Button type='button' 
                                label='Button 3a'
                                item={{ value:'Button 3a', id:'button3a', flavor:'secondary' }} />
                        </fieldset>
                    </div>
                    <div className='mx-2 my-4'>
                        <fieldset className='form-group'>
                            <ButtonGroup 
                                legend='Button Group'
                                items={[
                                    { value:'Button 1b', id:'button1b', flavor:'secondary'},
                                    { value:'Button 2b', id:'button2b', flavor:'primary'},
                                    { value:'Button 3b', id:'button3b', flavor:'dark'}
                                ]} 
                                id='buttons-b'
                            />
                        </fieldset>
                    </div>
                    <div className='mx-2 my-4'>
                        <fieldset className='form-group'>
                            <legend>Buttons (group)</legend>
                            <div className='input-group'>
                                <Button type='button' 
                                    label='Button 1c'
                                    item={{ value:'Button 1c', id:'button1c', flavor:'dark' }} />
                                <Button type='button' 
                                    label='Button 2c'
                                    item={{ value:'Button 2c', id:'button2c', flavor:'primary' }} />
                                <Button type='button' 
                                    label='Button 3c'
                                    item={{ value:'Button 3c', id:'button3c', flavor:'secondary' }} />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
		</div>
        <style jsx global>{`
            .form-group {
                border-bottom:1px solid #eee;
                padding: 0 0 0.5rem;
                margin: 0 0 1rem;
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
