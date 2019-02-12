// import PropTypes from 'prop-types';

import Input from '../common/Input';
import Button from '../common/Button';
import Fieldset from '../common/Fieldset';

const FormDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
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
        </React.Fragment>
    );
}

FormDemo.propTypes = {
    // legend: PropTypes.string
};

export default FormDemo;