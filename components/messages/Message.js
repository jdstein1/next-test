class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        // console.log('Message props: ', props);
    }

    render() {

        // const autoClose = setTimeout(() => {
        //     console.log('autoClose timeout');
        //     // $().alert.('close');
        //     // close.bs.alert
        // }, 2000);

        return (<div>
            <div className={'alert alert-dismissible fade show mb-2 '+'alert-'+(this.props.kind)} role="alert">
                <h5 className="mb-1">{this.props.lede}</h5>
                <span>{this.props.text}</span>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <style jsx>{`
                .alert {
                    position:relative;
                    border: 1px solid rgba(51,51,51,0.25);
                    border-radius: 0.25rem;
                    box-shadow:0 0.25rem 0.75rem 0 rgba(51,51,51,0.35);
                    color:black;
                    margin:0.25rem;
                }
                .alert.fade.show {
                    opacity:0.9;
                }
                .close {
                    text-shadow:0 0 5px white;
                }
			`}</style>
        </div>);
	}
}

export default Message;