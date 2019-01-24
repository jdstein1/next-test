// import PropTypes from 'prop-types';

import Input from '../common/Input';

const BinariesDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
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
        </React.Fragment>
    );
}

BinariesDemo.propTypes = {
    // legend: PropTypes.string
};

export default BinariesDemo;