import Layout from '../components/Layout';

/* this is a function component */

const Index = (props) => (
	<Layout msgs={props.messages} activePageIndex={props.currentPageIndex}>
		<div className="home module">
		<div className="jumbotron">
			<h1>Home</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum praesentium ipsam id qui dicta doloremque dolor minus laborum assumenda dolorum laboriosam nemo provident, vitae voluptates sint, est neque explicabo porro!</p>
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
		currentPageIndex:0,
		messages: [
			{id:0, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'Home Warning'},
			{id:1, kind:'primary', text:'Lorem ipsum dolor sic amet...', lede:'Home Primary'},
			{id:2},
			{id:3, kind:'danger', text:'Lorem ipsum dolor sic amet...', lede:'Home Danger'},
			{id:4, kind:'success', text:'Lorem ipsum dolor sic amet...', lede:'Home Success'},
		]
	}
}

export default Index;