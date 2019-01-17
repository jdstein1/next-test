import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/ButtonGroup';
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
                        <h3>Form Inputs</h3>
                        <Input
                            type='' 
                            label=''
                            hint=''
                            item={{ label:'', value:'', id:'input1' }} />
                        <Input
                            type='text' 
                            label='Text (item object)'
                            hint='This field is a text input'
                            item={{ label:'', value:'', id:'text1'}} />
                        <Input
                            type='text' 
                            label='Text (items array)'
                            hint='This field is a text input'
                            items={[{ label:'', value:'', id:'text1'}]} />
                        <Input
                            type='password' 
                            label='Password'
                            hint='Passwords must have 64 characters: 16 of [A-Za-z], 14 of [0-9], and 34 of [~!@#$%^*()_]'
                            item={{ label:'', value:'bdfhvjguiteu', id:'password1'}} />
                        <Input
                            type='color' 
                            label='Color'
                            item={{ label:'', value:'#66dd99', id:'color1'}} />
                        <Input
                            type='email' 
                            label='Email'
                            item={{ label:'', value:'jdfghg@kdjhfkgfhj.com', id:'email1'}} />
                        <Input
                            type='datetime-local' 
                            label='Date Time Local'
                            item={{ label:'', value:'2017-06-01T08:30', id:'datetime1'}} />
                        <Input
                            type='number' 
                            label='Number'
                            item={{ value:84576, id:'number1' }} />
                        <Input
                            type='select' 
                            label='Select/Option'
                            items={[
                                { value:'Select/Option 1'},
                                { value:'Select/Option 2', selected:true},
                                { value:'Select/Option 3'},
                                { value:'Select/Option 4'}
                            ]}
                            id='select1' />
                        <Input
                            type='textarea' 
                            label='Textarea'
                            value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?'
                            id='textarea1' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Binary Inputs</h3>
                        <Input
                            type='radio' 
                            label='Radio (true/false)'
                            items={[
                                { value:'True'},
                                { value:'False', selected:true}
                            ]}
                            id='radios1'/>
                        <Input
                            type='checkbox' 
                            label='Checkbox (true/false)'
                            items={[
                                { value:''}
                            ]}
                            id='checkboxes1'
                            hint='Toggle' />
                        <Input
                            type='radio' 
                            label='Radio (multi)'
                            items={[
                                { value:'Radio 1'},
                                { value:'Radio 2'},
                                { value:'Radio 3', selected:true},
                                { value:'Radio 4'}
                            ]}
                            id='radios2'
                            hint='Pick one' />
                        <Input
                            type='checkbox' 
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
                    <div className='mx-2 my-4'>
                        <h3>Buttons</h3>
                        <Fieldset legend='Input Buttons'>
                            <Input
                                type='submit' 
                                item={{ label:'Submit Me', value:'hjfduig', id:'button1', flavor:'primary' }} />
                            <Input
                                type='reset' 
                                item={{ label:'Reset Me', value:'vnbjdr7e', id:'button2', flavor:'secondary' }} />
                            <Input
                                type='button' 
                                item={{ label:'Button', value:'87dbjvc', id:'button3', flavor:'dark' }} />
                        </Fieldset>
                        <Fieldset legend='Buttons'>
                            <Button
                                type='button' 
                                item={{ label:'Button 1a', value:'jg875yh', id:'button1a', flavor:'dark' }} />
                            <Button
                                type='button' 
                                item={{ label:'Button 2a', value:'hcwy634', id:'button2a', flavor:'primary' }} />
                            <Button
                                type='button' 
                                item={{ label:'Button 3a', value:'jegrfw8', id:'button3a', flavor:'secondary' }} />
                        </Fieldset>
                        <Input
                            type='button-group'
                            label='ButtonGroup (1)'
                            items={[
                                { label:'Button 2e', value:'ivgdr587y', id:'button2e'}
                            ]}
                        />
                        <Input
                            type='button-group'
                            label='ButtonGroup (2)'
                            items={[
                                { label:'Button 1d', value:'vehjswiru', id:'button1d', flavor:'secondary'},
                                { label:'Button 2d', value:'87f3t45gi', id:'button2d'}
                            ]}
                        />
                        <Input
                            type='button-group'
                            label='ButtonGroup (3)'
                            items={[
                                { label:'Button 1b', value:'vfytewu4w', id:'button1b', flavor:'secondary'},
                                { label:'Button 2b', value:'d7634etyr', id:'button2b', flavor:'primary'},
                                { label:'Button 3b', value:'jbdv76w43', id:'button3b', flavor:'dark'}
                            ]}
                        />
                        <Fieldset legend='Buttons (group)'>
                            <div className='input-group'>
                                <Button
                                    type='button'
                                    item={{ label:'Button 1c', value:'Button 1c', id:'button1c', flavor:'dark' }} />
                                <Button
                                    type='button'
                                    item={{ label:'Button 2c', value:'Button 2c', id:'button2c', flavor:'primary' }} />
                                <Button
                                    type='button'
                                    item={{ label:'Button 3c', value:'Button 3c', id:'button3c', flavor:'secondary' }} />
                            </div>
                        </Fieldset>
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
        description: 'Playground for new components.',
        currentPageIndex: 6
	}
}

export default Forms;
