import Message from '../../components/messages/Message';

class MessageQueue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msgIndexShow: null

        }
    }

    componentWillMount() {
        this.setState({
            messages: this.props.msgs ? this.props.msgs : [
                {id:1, kind:'info', text:'Lorem...', lede:'Alert!'}
            ]
        })
    }

    nextInQueue() {
        // console.log('+++++++++++++++++++++++++++++');
        console.log('START nextInQueue');
        // console.log('before msgIndexShow: ', this.state.msgIndexShow);
        console.group('this.state.messages.length: ', this.state.messages.length);

        if ( this.state.messages.length > 1 ) {
            console.log('more than 1 message')
            if ( this.state.msgIndexShow < this.state.messages.length) {
                // msgIndexShow less than # of messages
                console.log('msgIndexShow less than # of messages');
                this.setState({
                    msgIndexShow: this.state.msgIndexShow+1
                }, () => {
                    // console.log('after msgIndexShow: ', this.state.msgIndexShow);
                });
            } else {
                // msgIndexShow NOT less than # of messages...
                // 
                console.log('msgIndexShow NOT less than # of messages');
                this.setState({
                    msgIndexShow: 1
                }, () => {
                    // console.log('after msgIndexShow: ', this.state.msgIndexShow);
                });
            }
        } else {
            console.log('only 1 message')
            // console.log('msgIndexShow: ', this.state.msgIndexShow)
            this.setState({
                msgIndexShow: 1
            }, () => {
                // console.log('after msgIndexShow: ', this.state.msgIndexShow);
            });
        }

        console.groupEnd();
        
        // for (let index = 0; index < this.state.messages.length; index++) {
        //     this.setState({
        //         msgIndexShow: this.state.msgIndexShow+1
        //     }, () => {
        //        console.log('after msgIndexShow: ', this.state.msgIndexShow);
        //     });
        // }

    };

    render() {
        // console.log('this.state: ',this.state);
        // console.log('this.props: ',this.props);
        
        let msgs = this.state.messages;
        for (let index = 0; index < msgs.length; index++) {
            const msg = msgs[index];
            msg.kind = msg.kind?msg.kind:this.props.kind;
            msg.text = msg.text?msg.text:this.props.text;
            msg.lede = msg.lede?msg.lede:this.props.lede;
        }

        return (<div className="alert-queue">
            <button className={'btn btn-info btn-sm'} style={{float:'right'}} onClick={this.nextInQueue.bind(this)}>Show Next Message in Queue</button>
            { msgs
                .filter((msg) => this.state.msgIndexShow === msg.id)
                .map((msg,key) => <Message key={msg.id} kind={msg.kind} text={msg.text} lede={msg.lede} />)
            }
            <style jsx>{`
                .alert-queue {
                    position:fixed;
                    top:3.5rem;
                    left:auto;
                    bottom:auto;
                    right:0;
                    width:320px;
                    padding:0.5rem;
                    z-index:99999;
                }
                @media screen and (min-width:769px) {
                    .alert-queue {top:0;}
                }
			`}</style>
        </div>);
	}
}

MessageQueue.defaultProps = {
    kind: 'info',
    lede: 'Info',
    text: 'The quick brown fox jumps over the lazy dog...',
};

export default MessageQueue;