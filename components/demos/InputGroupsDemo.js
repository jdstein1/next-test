// import PropTypes from 'prop-types';

import Fieldset from '../common/Fieldset';
import Label from '../common/Label';
import { flavors } from '../../data/flavors';
import Utils from '../../utils/';

// console.log('flavors: ', flavors);
// console.log('Utils.getRandMember: ', Utils.getRandMember);

const getRandomFlavor = () => {
    return Utils.getRandMember(flavors);
}

const InputGroupsDemo = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <Fieldset legend={title}>
                <Label text='Prepend' />
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Text</div>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                </div>
                <Label text='Append' />
                <div className="input-group mb-2">
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <div className="input-group-text">Text</div>
                    </div>
                </div>
                <div className="input-group mb-2">
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                </div>
                <Label text='Prepend &amp; Append' />
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                    <div className="input-group-text">Text</div>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <div className="input-group-text">Text</div>
                    </div>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <div className="input-group-text">Text</div>
                    </div>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Text</div>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                    <div className="input-group-append">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                </div>
                <Label text='Experimental' />
                <div className="input-group mb-2">
                    <input className="form-control" type="text" placeholder="Input" style={{textAlign:'right'}} />
                    <div className="input-group-prepend input-group-append">
                    <div className="input-group-text">Text</div>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                </div>
                <div className="input-group mb-2">
                    <input className="form-control" type="text" placeholder="Input" style={{textAlign:'right'}} />
                    <div className="input-group-prepend input-group-append">
                        <button className={`btn btn-${ getRandomFlavor() }`}>Button</button>
                    </div>
                    <input className="form-control" type="text" placeholder="Input" />
                </div>
            </Fieldset>
        </React.Fragment>
    );
}

InputGroupsDemo.propTypes = {
    // legend: PropTypes.string
};

export default InputGroupsDemo;