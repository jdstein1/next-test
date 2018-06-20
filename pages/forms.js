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
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Form Inputs</h3>
                        <legend>Inputs</legend>
                        <Input type='' 
                            hint='This field has no type'
                            attrs={{
                                id:'input1'
                            }}></Input>
                        <Input type='text' 
                            hint='This field is a text input'
                            attrs={{
                                value:[''], 
                                id:'text1'
                            }}>Text</Input>
                        <Input type='password' 
                            hint='Passwords must have 64 characters: 16 of [A-Za-z], 14 of [0-9], and 34 of [~!@#$%^*()_]'
                            attrs={{
                                value:['bdfhvjguiteu'], 
                                id:'password1'
                            }}>Password</Input>
                        <Input type='color' 
                            attrs={{
                                value:['#66dd99'], 
                                id:'color1'
                            }}>Color</Input>
                        <Input type='email' 
                            attrs={{
                                value:['jdfghg@kdjhfkgfhj.com'], 
                                id:'email1'
                            }}>Email</Input>
                        <Input type='datetime-local' 
                            attrs={{
                                value:['2017-06-01T08:30'], 
                                id:'datetime1'
                            }}>Date Time Local</Input>
                        <Input type='number' 
                            attrs={{
                                value:[84576], 
                                id:'number1'
                            }}>Number</Input>
                    </div>
                    <div className='mx-2 my-4'>
                        <legend>Select/Option</legend>
                        <Input type='select' 
                            attrs={{
                                value:[
                                    'select/option jsdghkdf',
                                    'select/option ruiuherg',
                                    'select/option gfdhueur',
                                    'select/option fkgshidh'
                                ], 
                                selected:2, 
                                id:'select1'
                            }}>Select/Option</Input>
                    </div>
                    <div className='mx-2 my-4'>
                        <legend>Textarea</legend>
                        <Input type='textarea' 
                            attrs={{
                                value:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique eaque aspernatur asperiores accusantium? Maxime quo at aliquid voluptas placeat ipsam libero a quam? Maiores excepturi maxime fugit explicabo perferendis?'],
                                id:'textarea1'
                            }}>Textarea</Input>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Binary Inputs</h3>
                        <Input type='radio' 
                            attrs={{
                                value:[
                                    'True',
                                    'False'
                                ], 
                                selected:1, 
                                id:'radios1'
                            }}>Radio (true/false)</Input>
                        <Input type='checkbox' 
                            attrs={{
                                value:[
                                    ''
                                ], 
                                selected: 0, 
                                id:'checkboxes1'
                            }}
                            hint='Toggle'>Checkbox (true/false)</Input>
                        <Input type='radio' 
                            attrs={{
                                value:[
                                    'Radio 1',
                                    'Radio 2',
                                    'Radio 3',
                                    'Radio 4'
                                ], 
                                selected:2, 
                                id:'radios2'
                            }}
                            hint='Pick one'>Radio (multi)</Input>
                        <Input type='checkbox' 
                            attrs={{
                                value:[
                                    'Checkbox 1',
                                    'Checkbox 2',
                                    'Checkbox 3',
                                    'Checkbox 4'
                                ], 
                                selected:0, 
                                id:'checkboxes2'
                            }}
                            hint='Pick many'>Checkbox (multi)</Input>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='mx-2 my-4'>
                        <h3>Buttons</h3>
                        <legend>Input Buttons</legend>
                        <Input type='submit' 
                            attrs={{
                                value:['Submit'], 
                                id:'button1', 
                                flavor:'dark'
                            }} />
                        <Input type='reset' 
                            attrs={{
                                value:['Reset'], 
                                id:'button2', 
                                flavor:'primary'
                            }} />
                        <Input type='button' 
                            attrs={{
                                value:['Button'], 
                                id:'button3', 
                                flavor:'secondary'
                            }} />
                    {/* </div>
                    <div className='mx-2 my-4'> */}
                        <legend>Buttons</legend>
                        <Button type='button' 
                            attrs={{
                                value:['Button 1a'], 
                                id:'button1a', 
                                flavor:'dark'
                            }}>Button 1a</Button>
                        <Button type='button' 
                            attrs={{
                                value:['Button 2a'], 
                                id:'button2a', 
                                flavor:'primary'
                            }}>Button 2a</Button>
                        <Button type='button' 
                            attrs={{
                                value:['Button 3a'], 
                                id:'button3a', 
                                flavor:'secondary'
                            }}>Button 3a</Button>
                    {/* </div>
                    <div className='mx-2 my-4'> */}
                        <legend>ButtonGroup</legend>
                        <Input type='button-group' 
                            attrs={{
                                value:[
                                    'Button 1b',
                                    'Button 2b',
                                    'Button 3b'
                                ], 
                                id:'buttons-b', 
                                // flavor:'secondary'
                                flavor:['secondary','primary','dark']
                            }}>Button Group</Input>
                    {/* </div>
                    <div className='mx-2 my-4'> */}
                        <legend>Buttons (group)</legend>
                        <div className='input-group'>
                            <Button type='button' 
                                attrs={{
                                    value:['Button 1c'], 
                                    id:'button1c', flavor:'dark'
                                }}>Button 1c</Button>
                            <Button type='button' 
                                attrs={{
                                    value:['Button 2c'], 
                                    id:'button2c', flavor:'primary'
                                }}>Button 2c</Button>
                            <Button type='button' 
                                attrs={{
                                    value:['Button 3c'], 
                                    id:'button3c', flavor:'secondary'
                                }}>Button 3c</Button>
                        </div>
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