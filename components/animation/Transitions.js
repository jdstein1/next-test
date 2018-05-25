class Transitions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle:'Transitions'
        }
        // console.log('Transitions props: ', props);
    }

    clickTrigger = (e) => {
        e.preventDefault();
        console.log(e.target);
        e.target.classList.toggle('clicked')
    }

    render() {

        // const autoClose = setTimeout(() => {
        //     console.log('autoClose timeout');
        //     // $().alert.('close');
        //     // close.bs.alert
        // }, 2000);

        return (
            <div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>{this.state.pageTitle}</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <h4>Hover</h4>
                        <form>
                            <fieldset className='form-group'>
                                <div className='basic form-control btn btn-test orange'>Orange Test Button</div>
                                <div className='basic form-control btn btn-test yellow'>Yellow Test Button</div>
                                <div className='basic form-control btn btn-test purple'>Purple Test Button</div>
                            </fieldset>
                        </form>
                    </div>
                    <div className='col-4'>
                        <h4>Hover Trigger + Target</h4>
                        <div className='basic anim-trigger orange'>Orange Test Trigger <div className='target'>TARGET</div></div>
                        <div className='basic anim-trigger yellow'>Yellow Test Trigger <div className='target'>TARGET</div></div>
                        <div className='basic anim-trigger purple'>Purple Test Trigger <div className='target'>TARGET</div></div>
                    </div>
                    <div className='col-4'>
                        <h4>Click Trigger + Target</h4>
                        <form>
                            <fieldset className='form-group'>
                                <button onClick={ this.clickTrigger } className='basic form-control btn anim-click orange'>Orange Test Button</button>
                                <button onClick={ this.clickTrigger } className='basic form-control btn anim-click yellow'>Yellow Test Button</button>
                                <button onClick={ this.clickTrigger } className='basic form-control btn anim-click purple'>Purple Test Button</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            <style jsx>{`
            // BUTTON HOVER ANIMATION
            .btn-test {
                transition: 
                    color 1s linear,
                    background-color .5s ease-in-out 300ms,
                    font-size .25s ease-in-out 100ms;
            }
            .btn-test.orange:hover {
                color:blue;
                background-color:orange;
                font-size:2rem;
            }
            .btn-test.yellow:hover {
                color:red;
                background-color:yellow;
                font-size:1.5rem;
            }
            .btn-test.purple:hover {
                color:green;
                background-color:purple;
                font-size:2.5rem;
            }
            // TRIGGER HOVER ANIMATION
            .anim-trigger {
                position:relative;
            }
            .target {
                color:black;
                background-color:grey;
                font-size:1rem;
                margin:0 0.25rem 0.25rem 0;
                padding:0.25rem 0.5rem;
                position:absolute;
                top:0;
                right:0;
                left:auto;
                transition: 
                    right 1s ease,
                    color 1s linear,
                    background-color .5s ease-in-out 300ms,
                    font-size .25s ease-in-out 100ms;
            }
            .anim-trigger.orange:hover .target {
                right:2rem;
                color:blue;
                background-color:orange;
                font-size:2rem;
            }
            .anim-trigger.yellow:hover .target {
                right:2rem;
                color:red;
                background-color:yellow;
                font-size:1.5rem;
            }
            .anim-trigger.purple:hover .target {
                right:2rem;
                color:green;
                background-color:purple;
                font-size:2.5rem;
            }
            // TRIGGER CLICK ANIMATION
            .anim-click {
                position:relative;
                transition: 
                    right 1s ease,
                    color 1s linear,
                    background-color .5s ease-in-out 300ms,
                    font-size .25s ease-in-out 100ms;
            }
            .anim-click.orange.clicked {
                color:blue;
                background-color:orange;
                font-size:2rem;
            }
            .anim-click.yellow.clicked {
                color:red;
                background-color:yellow;
                font-size:1.5rem;
            }
            .anim-click.purple.clicked {
                color:green;
                background-color:purple;
                font-size:2.5rem;
            }
			`}</style>
        </div>);
	}
}

export default Transitions;