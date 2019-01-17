import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
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
                            type='text' 
                            legend=''
                            id='text1'
                            items={[
                                { label:'Text' }
                            ]} />
                        <Input
                            type='text' 
                            legend='Text (2)'
                            hint='This field is a text input'
                            id='text2'
                            items={[
                                { label:'Text 1b' },
                                { label:'Text 2b' }
                            ]} />
                        <Input
                            type='password' 
                            legend='Password'
                            id='poassword1'
                            items={[
                                { label:'Password', value:'bdfhvjguiteu' }
                            ]} />
                        <Input
                            type='color' 
                            legend='Color'
                            id='color1'
                            items={[
                                { label:'Color', value:'#66dd99' }
                            ]} />
                        <Input
                            type='email' 
                            legend='Email'
                            id='email1'
                            items={[
                                { label:'Email', value:'jdfghg@kdjhfkgfhj.com' }
                            ]} />
                        <Input
                            type='datetime-local' 
                            legend='Date Time Local'
                            id='date1'
                            items={[
                                { label:'Date Time Local', value:'2017-06-01T08:30' }
                            ]} />
                        <Input
                            type='number' 
                            legend='Number'
                            id='number1'
                            items={[
                                { label:'Number', value:84576 }
                            ]} />
                        <Input
                            type='select' 
                            legend='Select/Option'
                            id='select1'
                            items={[
                                { label:'Select/Option 1a', value:'g8743tweiu' },
                                { label:'Select/Option 1b', value:'djvhfgiuer', selected:true},
                                { label:'Select/Option 1c', value:'vbknjds7is' },
                                { label:'Select/Option 1d', value:'fgrkeo8iei' }
                            ]} />
                        <Input
                            type='select' 
                            legend='Select/Option'
                            id='select2'
                            settings={{multiple:true}}
                            items={[
                                { label:'Select/Option 2a', value:'g8743tweiu' },
                                { label:'Select/Option 2b', value:'djvhfgiuer', selected:true},
                                { label:'Select/Option 2c', value:'vbknjds7is' },
                                { label:'Select/Option 2d', value:'fgrkeo8iei' }
                            ]} />
                        <Input
                            type='textarea' 
                            legend='Textarea'
                            id='textarea1'
                            items={[
                                { label:'Textarea 1', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' }
                            ]} />
                        <Input
                            type='textarea' 
                            legend='Textarea'
                            id='textarea2'
                            items={[
                                { label:'Textarea 2a', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' },
                                { label:'Textarea 2b', value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?' }
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
                                { value:'True' },
                                { value:'False', selected:true}
                            ]}
                            id='radios1'/>
                        <Input
                            type='checkbox' 
                            legend='Checkbox (true/false)'
                            items={[
                                { value:'' }
                            ]}
                            id='checkboxes1'
                            hint='Toggle' />
                        <Input
                            type='radio' 
                            legend='Radio (multi)'
                            items={[
                                { value:'Radio 1' },
                                { value:'Radio 2' },
                                { value:'Radio 3', selected:true},
                                { value:'Radio 4' }
                            ]}
                            id='radios2'
                            hint='Pick one' />
                        <Input
                            type='checkbox' 
                            legend='Checkbox (multi)'
                            items={[
                                { value:'Checkbox 1', selected:true},
                                { value:'Checkbox 2' },
                                { value:'Checkbox 3' },
                                { value:'Checkbox 4' }
                            ]}
                            id='checkboxes2'
                            hint='Pick many' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Buttons</h3>
                        <Fieldset legend='Input'>
                            <Input
                                type='submit' 
                                id='submit1' 
                                items={[
                                    { label:'Submit Me', value:'hjfduig', flavor:'primary' }
                                ]} />
                            <Input
                                type='reset' 
                                id='reset1' 
                                items={[
                                    { label:'Reset Me', value:'vnbjdr7e', flavor:'secondary' }
                                ]} />
                            <Input
                                type='button' 
                                id='button1' 
                                items={[
                                    { label:'Button', value:'87dbjvc', flavor:'dark' }
                                ]} />
                        </Fieldset>
                        <Fieldset legend='Buttons'>
                            <Button
                                type='button' 
                                id='button2a' 
                                items={[
                                    { label:'Button', value:'jg875yh', flavor:'dark' }
                                ]} />
                            <Button
                                type='button' 
                                id='button2b' 
                                items={[
                                    { label:'Button', value:'hcwy634', flavor:'primary' }
                                ]} />
                            <Button
                                type='button' 
                                id='button2c' 
                                items={[
                                    { label:'Button', value:'jegrfw8', flavor:'secondary' }
                                ]} />
                        </Fieldset>
                        <Input
                            type='button-group'
                            legend='ButtonGroup (1)'
                            id='button3'
                            items={[
                                { label:'Button', value:'ivgdr587y' }
                            ]}
                        />
                        <Input
                            type='button-group'
                            legend='ButtonGroup (2)'
                            id='button4'
                            items={[
                                { label:'Button', value:'vehjswiru', flavor:'secondary' },
                                { label:'Button', value:'87f3t45gi' }
                            ]}
                        />
                        <Input
                            type='button-group'
                            legend='ButtonGroup (3)'
                            id='button5'
                            items={[
                                { label:'Button', value:'vfytewu4w', flavor:'secondary' },
                                { label:'Button', value:'d7634etyr', flavor:'primary' },
                                { label:'Button', value:'jbdv76w43', flavor:'dark' }
                            ]}
                        />
                        <Fieldset legend='Buttons'>
                            <div className='input-group'>
                                <Button
                                    type='button' 
                                    id='button6a' 
                                    items={[
                                        { label:'Button', value:'jhg-dfuge985', flavor:'dark' }
                                    ]} />
                                <Button
                                    type='button' 
                                    id='button6b' 
                                    items={[
                                        { label:'Button', value:'jhg-ndhfg784', flavor:'primary' }
                                    ]} />
                                <Button
                                    type='button' 
                                    id='button6c' 
                                    items={[
                                        { label:'Button', value:'jhg-23687ryu', flavor:'secondary' }
                                    ]} />
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
