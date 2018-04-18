import Notifications, {notify} from 'react-notify-toast';

class ProjectsList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			myNotifyColors: { background: '#0E1717', text: "#eee" }
		}
		console.log('ProjectsList props: ',props);
	}
	
	componentWillMount() {
		this.setState({
			selectedProject: this.props.selectedProject
		})
	}

	handleEdit(e) {
		console.log('START handleEdit: ', this.state.selectedProject);
		// open editor form with selected project info		
	}

	handleClick(e) {
		console.log('START handleClick: ', e.target);
		// change the selected project using click on list item

	}

	handleChange(e) {
		console.log('START handleChange: ', e.target.value);
		// change the selected project using SELECT/OPTION menu

		
		if ( e.target.value!=='') {
			// console.log('START handleChange: ', this.refs.myProjectSelect.value);
			// console.info('projects: ', this.props.allprojects);
			
			// get the index of the object in the array by looping over a key in each obj
			// console.log(Object.keys(this.props.allprojects[0]));
			for (let index = 0; index < this.props.allprojects.length; index++) {
				const el = this.props.allprojects[index];
				if (el.id === e.target.value) {
					// console.log(index);
					this.setState({selectedProject: this.props.allprojects[index]}, () => {
						notify.show('Selecting "'+this.state.selectedProject.name+'"','custom',1000,this.state.myNotifyColors);
					});
				}
			}
		}
	}

	changeChosen(e) {
		console.log('START changeChosen: ', e.target.value);
		var stateCopy = Object.assign({}, this.state.selectedProject);
		stateCopy.name = e.target.value
		this.setState({selectedProject:stateCopy});
		
	}

	projectIcon(type) {
		switch (type) {
			case 'electrical':
				return 'fas fa-bolt'
				break;

			case 'plumbing':
				return 'fas fa-bath'
				break;

			case 'cabinetry':
				return 'fas fa-cubes'
				break;

			case 'masonry':
				return 'fas fa-graduation-cap'
				break;

			case 'furniture':
			case 'carpentry':
				return 'fas fa-tree'
				break;

			case 'lighting':
				return 'fas fa-lightbulb'
				break;

				default:
				break;
		}
	}

	render() {

		let projectList = this.props.allprojects
			.map(project => {
				return <li key={project.id} className={'list-group-item flex-column align-items-start '+(project.id===this.state.selectedProject.id ? 'list-group-item-primary' : '')}>
					<div className="">
						<span className={'project-icon '+this.projectIcon(project.type)}></span>
						<span className={'project-checkbox '+(project.id===this.state.selectedProject.id?'fas fa-check-square':'far fa-square')} onClick={this.handleClick.bind(this)}></span>
						<span className={'float-right badge '+project.type+' '+(project.id===this.state.selectedProject.id ? 'badge-primary' : 'badge-light')}>{project.type}</span>
						<h5 className="mb-0">{project.name}</h5>
					</div>
					<small className="text-muted">id: {project.id}</small>
				</li>;
		});

		let projectOptions = this.props.allprojects
			.map(project => {
				return <option key={project.id} value={project.id}>{project.name}</option>
		});

		return (<div className="col-md-8">
            	<h3>List of Projects</h3>
			{this.props.children}
			<ul className="projectList table table-hover list-group">
				{projectList}
			</ul>
			<br/>
			<hr/>
			<div className="form-group">
            	<legend>Choose Project:</legend>
				<label htmlFor="select">
					<select className="form-control" name="select" ref="myProjectSelect" defaultValue={this.state.selectedProject.id} onChange={this.handleChange.bind(this)}>
						<option value=''>choose...</option>
						{projectOptions}
					</select>
				</label>
			</div>
			<hr/>
			<div className="form-group">
				<legend>Chosen Project:</legend>
				<label htmlFor="current">
					<input className="form-control" name="current" type="text" value={this.state.selectedProject.name} readOnly />
				</label>
				<label htmlFor="chosen">
					<input className="form-control" name="chosen" type="text" value={this.state.selectedProject.name} onChange={this.changeChosen.bind(this)} />
				</label>
				<pre><code style={{background:'rgba(255,255,255,0.75)',color:'navy',padding:'0.325rem'}}>{JSON.stringify(this.state.selectedProject,null,"  ")}</code></pre>
			</div>
			<style jsx global>{`
				.project-icon, .project-checkbox {
					padding:0;
					margin:0;
					width:2.5rem;
					height:2.5rem;
					text-align:center;
				}
				.project-icon {
					float:right;
					// font-size:2.25em;
					margin-right:-0.5rem;
				}
				.project-checkbox {
					float:left;
					font-size:1.5em;
					margin-left:-1rem;
				}
			`}</style>
		</div>);
	}
}

export default ProjectsList;