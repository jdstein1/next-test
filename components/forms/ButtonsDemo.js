// import PropTypes from 'prop-types';

import Input from '../common/Input';
import Button from '../common/Button';
import Fieldset from '../common/Fieldset';

import { flavors } from '../../data/flavors';
import Utils from '../../utils/';

console.log('flavors: ', flavors);
console.log('Utils.getRandMember: ', Utils.getRandMember);

const ButtonsDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
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
                        { id:'input', label:'Submit 1', value:'hjfduig', flavor: Utils.getRandMember(flavors) }
                    ]} />
                <Input
                    type='reset' 
                    id='reset1' 
                    items={[
                        { id:'input', label:'Reset 1', value:'vnbjdr7e', flavor: Utils.getRandMember(flavors) }
                    ]} />
                <Input
                    type='button' 
                    id='button1' 
                    items={[
                        { id:'input', label:'Button 1', value:'87dbjvc', flavor: Utils.getRandMember(flavors) }
                    ]} />
            </Fieldset>
            <Fieldset legend='Buttons 2'>
                <Button
                    type='button' 
                    id='button2a' 
                    items={[
                        { id:'input', label:'Button 2a', value:'jg875yh', flavor: Utils.getRandMember(flavors) }
                    ]} />
                <Button
                    type='button' 
                    id='button2b' 
                    items={[
                        { id:'input', label:'Button 2b', value:'hcwy634', flavor: Utils.getRandMember(flavors) }
                    ]} />
                <Button
                    type='button' 
                    id='button2c' 
                    items={[
                        { id:'input', label:'Button 2c', value:'jegrfw8', flavor: Utils.getRandMember(flavors) }
                    ]} />
            </Fieldset>
            <Fieldset legend='Button Groups'>
                <Input
                    type='button-group'
                    legend='ButtonGroup (1)'
                    id='button3'
                    settings={{inline:false}}
                    items={[
                        { id:'input', label:'Button 3', value:'ivgdr587y', flavor: Utils.getRandMember(flavors) }
                    ]}
                />
                <Input
                    type='button-group'
                    legend='Inline ButtonGroup (2)'
                    id='button4'
                    settings={{inline:true}}
                    items={[
                        { id:'input', label:'Button 4', value:'vehjswiru', flavor: Utils.getRandMember(flavors) },
                        { id:'input', label:'Button 4', value:'87f3t45gi', flavor: Utils.getRandMember(flavors) }
                    ]}
                />
                <Input
                    type='button-group'
                    legend='ButtonGroup (3)'
                    id='button5'
                    settings={{inline:false}}
                    items={[
                        { id:'input', label:'Button 5', value:'vfytewu4w', flavor: Utils.getRandMember(flavors) },
                        { id:'input', label:'Button 5', value:'d7634etyr', flavor: Utils.getRandMember(flavors) },
                        { id:'input', label:'Button 5', value:'jbdv76w43', flavor: Utils.getRandMember(flavors) }
                    ]}
                />
            </Fieldset>
        </React.Fragment>
    );
}

ButtonsDemo.propTypes = {
    // legend: PropTypes.string
};

export default ButtonsDemo;