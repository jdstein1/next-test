class Keyframes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle:'Keyframes',
            isPaused: false,
            isColorAnimated: false,
            isMarginAnimated: false,
            isScaleAnimated: false
        }
        // console.log('Keyframes props: ', props);
    }

    togglePause = (e) => {
        e.preventDefault();
        console.dir(e.target);
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    triggerColor = (e) => {
        e.preventDefault();
        console.log(e.target.classList);
        this.setState({
            isMarginAnimated: false,
            isScaleAnimated: false,
            isColorAnimated: !this.state.isColorAnimated
        })
    }

    triggerMargin = (e) => {
        e.preventDefault();
        console.log(e.target.classList);
        this.setState({
            isColorAnimated: false,
            isScaleAnimated: false,
            isMarginAnimated: !this.state.isMarginAnimated
        })
    }

    triggerScale = (e) => {
        e.preventDefault();
        console.log(e.target.classList);
        this.setState({
            isColorAnimated: false,
            isMarginAnimated: false,
            isScaleAnimated: !this.state.isScaleAnimated
        })
    }

    render() {

        const { isColorAnimated, isMarginAnimated, isScaleAnimated, isPaused } = this.state

        return (
            <div>
                <div className='row'>
                    <div className='col-12 form-inline'>
                        <h3>{this.state.pageTitle}</h3>
                        <button className='basic form-control btn' onClick={ this.togglePause }>Pause</button>                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button onClick={ this.triggerColor } className='basic form-control btn anim-trigger'>Color Animation TRIGGER</button>
                    </div>
                    <div className="col">
                        <div className={`basic anim-target ${ isColorAnimated ? 'anim-color' : ''} ${ isPaused ? 'paused' : ''}`}>Color Animation TARGET</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button onClick={ this.triggerMargin } className='basic form-control btn anim-trigger'>Position Animation TRIGGER</button>
                    </div>
                    <div className="col">
                        <div className={`basic anim-target ${ isMarginAnimated ? 'anim-margin' : ''} ${ isPaused ? 'paused' : ''}`}>Position Animation TARGET</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button onClick={ this.triggerScale } className='basic form-control btn anim-trigger'>Scale Animation TRIGGER</button>
                    </div>
                    <div className="col">
                        <div className={`basic anim-target ${ isScaleAnimated ? 'anim-scale' : ''} ${ isPaused ? 'paused' : ''}`}>Scale Animation TARGET</div>
                    </div>
                </div>
            <style jsx>{`
                // KEYFRAMES
                @keyframes animColor {
                    0% { // start
                        background-color:red;
                    }
                    40%,60% { // fake pause
                        background-color:black;
                        color:white;
                    }
                    100% { // end
                        background-color:blue;
                    }
                }
                @keyframes animMargin {
                    0% { // start
                        right:0;
                        left:50%;
                    }
                    40%,60% { // fake pause
                        right:20%;
                        left:20%;
                    }
                    100% { // end
                        right:50%;
                        left:0;
                    }
                }
                @keyframes animScale {
                    0% { // start
                        transform:scale(1) rotate3d(0.2, 0.5, 0.8, 0deg);
                        // height:100%;
                        // font-size:1em;
                    }
                    40%,60% { // fake pause
                        transform:scale(1.5) rotate3d(1, 1, 1, 10deg);
                        // height:200%;
                        // font-size:1.5em;
                    }
                    100% { // end
                        transform:scale(2) rotate3d(0.5, 0.8, 0.2, -10deg);
                        // height:300%;
                        // font-size:2em;
                    }
                }
                // TRIGGERS
                .anim-trigger {
                    position:relative;
                }
                // TARGETS
                .anim-target {
                    position:absolute;
                    top:0;
                    right:0;
                    bottom:0;
                    left:0;
                    color:black;
                    background-color:grey;
                    text-align:center;
                    font-size:1rem;
                    margin:0 0.25rem 0.25rem 0;
                    padding:0.25rem 0.5rem;
                    overflow:hidden;
                }
                .anim-target.anim-color {
                    animation:animColor 1s ease-in-out 0s infinite alternate;
                }
                .anim-target.anim-margin {
                    animation:animMargin 2s ease-in-out 0s infinite alternate;
                }
                .anim-target.anim-scale {
                    animation:animScale 1.5s ease-in-out 0s infinite alternate;
                }
                .anim-target.paused {
                    animation-play-state:paused;
                }
            `}</style>
        </div>);
	}
}

export default Keyframes;