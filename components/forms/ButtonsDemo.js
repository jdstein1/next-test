// import PropTypes from 'prop-types';

import Input from '../common/Input';
import Button from '../common/Button';
import ButtonGroup from '../common/ButtonGroup';
import Fieldset from '../common/Fieldset';

import { flavors } from '../../data/flavors';
import Utils from '../../utils/';

// console.log('flavors: ', flavors);
console.log('Utils.getRandMember: ', Utils.getRandMember);

const getRandomFlavor = () => {
    return Utils.getRandMember(flavors);
}

const ButtonsDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <Fieldset legend='Bootstrap Buttons'>
                <button type='button' className='btn btn-primary mb-2 mr-2'>Primary</button>
                <input type='button' className='btn btn-secondary mb-2 mr-2' value='Secondary' />
                <button type='reset' className='btn btn-success mb-2 mr-2'>Success</button>
                <button type='submit' className='btn btn-danger mb-2 mr-2'>Danger</button>
                <button type='button' className='btn btn-warning mb-2 mr-2'>Warning</button>
                <button type='button' className='btn btn-info mb-2 mr-2'>Info</button>
                <button type='button' className='btn btn-light mb-2 mr-2'>Light</button>
                <button type='button' className='btn btn-dark mb-2 mr-2'>Dark</button>
                <button type='button' className='btn btn-link mb-2 mr-2'>Link</button>
            </Fieldset>
            <Fieldset legend='Buttons (block)'>
                <Button
                    type='submit' 
                    id='submit1' 
                    label='Submit 1'
                    value='hjfduig' 
                    flavor={ getRandomFlavor() }
                />
                <Button
                    type='reset' 
                    id='reset1' 
                    label='Reset 1'
                    value='vnbjdr7e' 
                    flavor={ getRandomFlavor() }
                />
                <Button
                    type='button' 
                    id='button1' 
                    label='Button 1'
                    value='87dbjvc' 
                    flavor={ getRandomFlavor() }
                />
            </Fieldset>
            <Fieldset legend='Buttons (inline)'>
                <Button
                    type='submit' 
                    id='submit1' 
                    label='Submit 1'
                    value='hjfduig' 
                    block={false}
                    flavor={ getRandomFlavor() }
                />
                <Button
                    type='reset' 
                    id='reset1' 
                    label='Reset 1'
                    value='vnbjdr7e' 
                    block={false}
                    flavor={ getRandomFlavor() }
                />
                <Button
                    type='button' 
                    id='button1' 
                    label='Button 1'
                    value='87dbjvc' 
                    block={false}
                    flavor={ getRandomFlavor() }
                />
            </Fieldset>
            <Fieldset legend='Buttons Groups Outer'>
                    <Button id='input1a' label='Button 3' value='ivgdr587y' flavor={ getRandomFlavor() } />
            </Fieldset>
            <ButtonGroup legend='Button Groups Inner'>
                <Button id='input2a' label='Button 4' value='vehjswiru' flavor={ getRandomFlavor() } />
                <Button id='input2b' label='Button 4' value='87f3t45gi' flavor={ getRandomFlavor() } />
            </ButtonGroup>
            <ButtonGroup settings={{inline:false}} legend='ButtonGroup (3)'>
                <Button id='input3a' label='Button 5' value='vfytewu4w' flavor={ getRandomFlavor() } />
                <Button id='input3b' label='Button 5' value='d7634etyr' flavor={ getRandomFlavor() } />
                <Button id='input3c' label='Button 5' value='jbdv76w43' flavor={ getRandomFlavor() } />
            </ButtonGroup>
        </React.Fragment>
    );
}

ButtonsDemo.propTypes = {
    // legend: PropTypes.string
};

export default ButtonsDemo;