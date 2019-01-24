// import PropTypes from 'prop-types';

import Input from '../common/Input';

const InputsDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
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
        </React.Fragment>
    );
}

InputsDemo.propTypes = {
    // legend: PropTypes.string
};

export default InputsDemo;