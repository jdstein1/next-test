import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Fieldset from '../components/common/Fieldset';

/* this is a function component */

const flavors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    // 'light',
    'dark',
    // 'link'
]

const getRandomFlavor = () => {
    return flavors[Math.floor(Math.random() * Math.floor(flavors.length))];
}

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
                            legend=''
                            id=''
                            items={[
                                { id:'', label:'', value:'' }
                            ]} />
                        <Input
                            type='text' 
                            legend='Text Inputs (2)'
                            hint='This field is a text input'
                            id='text2'
                            items={[
                                { id:'input_text_1a', label:'Text 1a', value:'jbdshgj reiugh' },
                                { id:'input_text_1b', label:'Text 1b', value:'dvhgs dgruy fjhgj djhfg' }
                            ]} />
                        <Input
                            type='password' 
                            // legend='Password'
                            id='poassword1'
                            items={[
                                { id:'input_password', label:'Password', value:'bdfhvjguiteu' }
                            ]} />
                        <Input
                            type='color' 
                            // legend='Color'
                            id='color1'
                            items={[
                                { id:'input_color', label:'Color', value:'#66dd99' }
                            ]} />
                        <Input
                            type='email' 
                            // legend='Email'
                            id='email1'
                            items={[
                                { id:'input_email', label:'Email', value:'jdfghg@kdjhfkgfhj.com' }
                            ]} />
                        <Input
                            type='datetime-local' 
                            // legend='Date Time Local'
                            id='date1'
                            items={[
                                { id:'input_date', label:'Date Time Local', value:'2017-06-01T08:30' }
                            ]} />
                        <Input
                            type='number' 
                            // legend='Number'
                            id='number1'
                            items={[
                                { id:'input_number', label:'Number', value:84576 }
                            ]} />
                        <Input
                            type='select' 
                            legend='Select/Option (single)'
                            id='select1'
                            items={[
                                { id:'input_select_option_1a', label:'Select/Option 1a', value:'g8743tweiu' },
                                { id:'input_select_option_1b', label:'Select/Option 1b', value:'djvhfgiuer', selected:true},
                                { id:'input_select_option_1c', label:'Select/Option 1c', value:'vbknjds7is' },
                                { id:'input_select_option_1d', label:'Select/Option 1d', value:'fgrkeo8iei' }
                            ]} />
                        <Input
                            type='select' 
                            legend='Select/Option (multiple)'
                            id='select2'
                            settings={{multiple:true}}
                            items={[
                                { id:'input_select_option_2a', label:'Select/Option 2a', value:'g8743tweiu' },
                                { id:'input_select_option_2b', label:'Select/Option 2b', value:'djvhfgiuer', selected:true},
                                { id:'input_select_option_2c', label:'Select/Option 2c', value:'vbknjds7is' },
                                { id:'input_select_option_2d', label:'Select/Option 2d', value:'fgrkeo8iei' }
                            ]} />
                        <Input
                            type='textarea' 
                            // legend='Textarea 1'
                            id='textarea1'
                            items={[
                                { id:'input_textarea', label:'Textarea 1', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' }
                            ]} />
                        <Input
                            type='textarea' 
                            // legend='Textarea 2'
                            id='textarea2'
                            items={[
                                { id:'input_textarea_2a', label:'Textarea 2a', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' },
                                { id:'input_textarea_2b', label:'Textarea 2b', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' }
                            ]} />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Binary Inputs</h3>
                        <Input
                            type='radio' 
                            legend='Radio (true/false)'
                            items={[
                                { id:'true', label:'', value:'True' },
                                { id:'false', label:'', value:'False', selected:true}
                            ]}
                            id='radios1'/>
                        <Input
                            type='checkbox' 
                            legend='Checkbox (true/false)'
                            items={[
                                { id:'checkbox', label:'', value:'Checkbox (true/false)' }
                            ]}
                            id='checkboxes1'
                            hint='Toggle' />
                        <Input
                            type='radio' 
                            legend='Radio (multi)'
                            items={[
                                { id:'radio_1', label:'', value:'Radio 1' },
                                { id:'radio_2', label:'', value:'Radio 2' },
                                { id:'radio_3', label:'', value:'Radio 3', selected:true},
                                { id:'radio_4', label:'', value:'Radio 4' }
                            ]}
                            id='radios2'
                            hint='Pick one' />
                        <Input
                            type='checkbox' 
                            legend='Checkbox (multi)'
                            items={[
                                { id:'checkbox_1', label:'', value:'Checkbox 1', selected:true},
                                { id:'checkbox_2', label:'', value:'Checkbox 2' },
                                { id:'checkbox_3', label:'', value:'Checkbox 3' },
                                { id:'checkbox_4', label:'', value:'Checkbox 4' }
                            ]}
                            id='checkboxes2'
                            hint='Pick many' />
                    </div>
                    <div className='mx-2 my-4'>
                        <h3>Buttons</h3>
                        <Fieldset legend='Bootstrap Buttons'>
                            <button type='button' className='btn btn-primary'>Primary</button>
                            <input type='button' className='btn btn-secondary' value='Secondary' />
                            <button type='reset' className='btn btn-success'>Success</button>
                            <button type='submit' className='btn btn-danger'>Danger</button>
                            <button type='button' className='btn btn-warning'>Warning</button>
                            <button type='button' className='btn btn-info'>Info</button>
                            <button type='button' className='btn btn-light'>Light</button>
                            <button type='button' className='btn btn-dark'>Dark</button>
                            <button type='button' className='btn btn-link'>Link</button>
                        </Fieldset>
                        <Fieldset legend='Buttons 1'>
                            <Input
                                type='submit' 
                                id='submit1' 
                                items={[
                                    { id:'input', label:'Submit 1', value:'hjfduig', flavor: getRandomFlavor() }
                                ]} />
                            <Input
                                type='reset' 
                                id='reset1' 
                                items={[
                                    { id:'input', label:'Reset 1', value:'vnbjdr7e', flavor: getRandomFlavor() }
                                ]} />
                            <Input
                                type='button' 
                                id='button1' 
                                items={[
                                    { id:'input', label:'Button 1', value:'87dbjvc', flavor: getRandomFlavor() }
                                ]} />
                        </Fieldset>
                        <Fieldset legend='Buttons 2'>
                            <Button
                                type='button' 
                                id='button2a' 
                                items={[
                                    { id:'input', label:'Button 2a', value:'jg875yh', flavor: getRandomFlavor() }
                                ]} />
                            <Button
                                type='button' 
                                id='button2b' 
                                items={[
                                    { id:'input', label:'Button 2b', value:'hcwy634', flavor: getRandomFlavor() }
                                ]} />
                            <Button
                                type='button' 
                                id='button2c' 
                                items={[
                                    { id:'input', label:'Button 2c', value:'jegrfw8', flavor: getRandomFlavor() }
                                ]} />
                        </Fieldset>
                        <Fieldset legend='Button Groups'>
                            <Input
                                type='button-group'
                                legend='ButtonGroup (1)'
                                id='button3'
                                settings={{inline:false}}
                                items={[
                                    { id:'input', label:'Button 3', value:'ivgdr587y', flavor: getRandomFlavor() }
                                ]}
                            />
                            <Input
                                type='button-group'
                                legend='Inline ButtonGroup (2)'
                                id='button4'
                                settings={{inline:true}}
                                items={[
                                    { id:'input', label:'Button 4', value:'vehjswiru', flavor: getRandomFlavor() },
                                    { id:'input', label:'Button 4', value:'87f3t45gi', flavor: getRandomFlavor() }
                                ]}
                            />
                            <Input
                                type='button-group'
                                legend='ButtonGroup (3)'
                                id='button5'
                                settings={{inline:false}}
                                items={[
                                    { id:'input', label:'Button 5', value:'vfytewu4w', flavor: getRandomFlavor() },
                                    { id:'input', label:'Button 5', value:'d7634etyr', flavor: getRandomFlavor() },
                                    { id:'input', label:'Button 5', value:'jbdv76w43', flavor: getRandomFlavor() }
                                ]}
                            />
                        </Fieldset>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Real Form</h3>
                        <Input
                            type='text' 
                            // legend='Name'
                            id='form_name'
                            settings={{inline:false}}
                            items={[
                                { id:'input_text_1a', label:'First Name', value:'' },
                                { id:'input_text_1b', label:'Last Name', value:'' }
                            ]} />
                        <Input
                            type='email' 
                            // legend='Email'
                            id='form_email'
                            items={[
                                { id:'input_email_1', label:'Email', value:'' }
                            ]} />
                        <Input
                            type='password' 
                            // legend='Password'
                            id='form_password'
                            items={[
                                { id:'input_password_1a', label:'Password', value:'' },
                                { id:'input_password_1b', label:'Re-enter Password', value:'' }
                            ]} />
                        <Input
                            type='datetime-local' 
                            // legend='Date Time Local'
                            id='form_date'
                            items={[
                                { id:'input_date_1', label:'Delivery Date & Time', value:'' }
                            ]} />
                        <Input
                            type='text' 
                            // legend='Address'
                            id='form_address'
                            settings={{inline:true}}
                            items={[
                                { id:'input_address_1', label:'Address 1', value:'' },
                                { id:'input_address_2', label:'Address 2', value:'' },
                                { id:'input_address_city', label:'City', value:'' },
                                { id:'input_address_state', label:'State', value:'' },
                                { id:'input_address_code', label:'Postal Code', value:'' },
                                { id:'input_address_country', label:'Country', value:'' }
                            ]} />
                        <Input
                            type='button-group'
                            // legend='Actions'
                            id='form_buttons'
                            settings={{inline:false}}
                            items={[
                                { id:'input', label:'OK', value:'submit', flavor:'primary' },
                                { id:'input', label:'Cancel', value:'reset', flavor:'secondary' }
                            ]}
                        />
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
