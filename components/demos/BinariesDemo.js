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
                    { label:'', value:'True' },
                    { label:'', value:'False', selected:true}
                ]}
                id='radios1'/>
            <Input
                type='checkbox' 
                legend='Checkbox (true/false)'
                items={[
                    { label:'', value:'Checkbox (true/false)' }
                ]}
                id='checkboxes1' />
            <Input
                type='radio' 
                legend='Radio (multi)'
                items={[
                    { label:'', value:'Radio 1' },
                    { label:'', value:'Radio 2' },
                    { label:'', value:'Radio 3', selected:true},
                    { label:'', value:'Radio 4' }
                ]}
                id='radios2' />
            <Input
                type='checkbox' 
                legend='Checkbox (multi)'
                items={[
                    { label:'', value:'Checkbox 1', selected:true},
                    { label:'', value:'Checkbox 2' },
                    { label:'', value:'Checkbox 3' },
                    { label:'', value:'Checkbox 4' }
                ]}
                id='checkboxes2' />
        </React.Fragment>
    );
}

BinariesDemo.propTypes = {
    // legend: PropTypes.string
};

export default BinariesDemo;