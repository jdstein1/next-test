import Layout from '../components/Layout';

/* this is a function component */

const Index = (props) => (
	<Layout msgs={props.messages} activePageIndex={props.currentPageIndex}>
		<div className="home module">
            <div className="jumbotron">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className="row">
                <div className="col-4">
                    <p>{props.description}</p>
                </div>
                <div className="col-4">
                    <p>{props.description}</p>
                </div>
                <div className="col-4">
                    <p>{props.description}</p>
                </div>
            </div>
		</div>
		<style jsx local>{`
			.home {
				// border:0.25em solid orange;
			}
	`}</style>
	</Layout>
);

Index.getInitialProps = async function() {
    
	return {
        title:'Home',
        description:'Sandbox for learning React & Next.',
        currentPageIndex:0,
		messages: [
			{id:1, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'Home Warning'},
			{id:2, kind:'primary', text:'Lorem ipsum dolor sic amet...', lede:'Home Primary'},
			{id:3},
			{id:4, kind:'danger', text:'Lorem ipsum dolor sic amet...', lede:'Home Danger'},
			{id:5, kind:'success', text:'Lorem ipsum dolor sic amet...', lede:'Home Success'},
		]
	}
}

export default Index;