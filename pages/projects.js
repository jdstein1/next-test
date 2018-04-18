import Layout from '../components/Layout';
import ProjectsList from '../components/projects/ProjectsList';
import ProjectEdit from '../components/projects/ProjectEdit';
// import { ToastContainer } from "react-toastr";
// import { ToastMessage } from "react-toastr";
import Notifications, {notify} from 'react-notify-toast';


class Projects extends React.Component {

	constructor(props) {
		// console.log('props: ', props);
		
		super(props);
		this.state = {
			currentPageIndex:3,
			title:'Projects Editor',
			initialProjects:[
				{id:'8573018871544508', name:'Sink', type:'plumbing'},
				{id:'6675232492533718', name:'Bench', type:'furniture'},
				{id:'1901643262355224', name:'Hutch', type:'cabinetry'},
				{id:'3078772871106959', name:'Lamp', type:'electrical'},
				{id:'4744225098351415', name:'Chandelier', type:'lighting'},
				{id:'1584785379198456', name:'Bed', type:'furniture'}
			],
			currentFilter: 'all',
			filteredProjects: [{}],
			namesArr: ['Chair','Couch','Door','Stool','Ladder','Bathtub','Wet Bar','Soaker','Fridge','Ceiling Fan','Cove Lighting','Track Lights','Picture Frame'],
			typesArr: ['electrical','plumbing','carpentry','masonry','cabinetry','furniture','lighting'],
			myNotifyColors: { background: '#0E1717', text: "#eee" }
		}
		// console.log('this.state: ', this.state);
		this.show = notify.createShowQueue();
	}

    componentWillMount() {
        this.setState({
			filteredProjects: this.state.initialProjects,
			selectedProject: this.state.initialProjects[2],
			messages: [
                {id:0, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'Projects Warning'},
                {id:1, kind:'success', text:'Lorem ipsum dolor sic amet...', lede:'Projects Success'},
            ]
        }, () => {
			// console.log('this.state: ', this.state);	
		})
	}
	
	removeProject(e) {
		console.group('START removeProject');
		
		// notify.show(message, type, timeout, color)
		notify.show('Removed "'+this.state.initialProjects[this.state.initialProjects.length-1].name+'"','custom',1000,this.state.myNotifyColors);

		this.state.initialProjects = this.state.initialProjects.slice(0,this.state.initialProjects.length-1);
		this.setState({filteredProjects: this.state.initialProjects}, () => {
			// console.log('this.state.initialProjects: ', this.state.initialProjects.length);
			// console.log('this.state.filteredProjects: ', this.state.filteredProjects.length);
		});
		console.groupEnd();
	}

	addProject(e) {
		console.group('START addProject');
		const newProject = {
			id:this.newId(this.state.initialProjects.length),
			name: this.getRandMember(this.state.namesArr),
			type: this.getRandMember(this.state.typesArr)
		};

		notify.show('Added "'+newProject.name+'"','custom',1000,this.state.myNotifyColors);

		this.state.initialProjects = this.state.initialProjects.concat(newProject);
		this.setState({filteredProjects: this.state.initialProjects}, () => {
			// console.log('this.state.initialProjects: ', this.state.initialProjects.length);
			// console.log('this.state.filteredProjects: ', this.state.filteredProjects.length);
		});
		console.groupEnd();
	}

	handleFilter(e) {
		console.log('START handleFilter: ', e.target.value);
		// console.log('this.state.currentFilter: ',this.state.currentFilter);

		// store the current state of the projects array...
		const currentProjects = this.state.filteredProjects;

		notify.show('Filtering "'+e.target.value+'"','custom',1000,this.state.myNotifyColors);

		if (e.target.value!=='') {
			
			this.setState({currentFilter: e.target.value}, () => {
				// console.log('setState of currentFilter: ',this.state.currentFilter);
				// console.log('currentProjects: ', currentProjects);
				
				// console.log('FILTER THE ARRAY');
				this.setState({
					filteredProjects: this.state.initialProjects.filter(project => {
						if (
						this.state.currentFilter===undefined||
						this.state.currentFilter===''||
						this.state.currentFilter==='all') {
							console.log('SHOW ALL');
							return true;
						} else {
							console.log('SHOW SOME');
							return project.type === this.state.currentFilter;
						}
					})
				});
			});
			// return filteredProjects;
		}


		// console.log('this.state.filteredProjects: ', this.state.filteredProjects);
		// return this.state.filteredProjects;
	}

	getRandMember(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	newId(salt) {
		// const id = Math.round((Math.random())*Math.pow(10,16),16);
		const ida = (Math.random()+' ').substring(2,10);
		const idb = (Math.random()+' ').substring(2,10);
		const id = ida + idb;
		// console.log('id: ', id);
		return id;
	}

	render() {

		// let filteredProjects = this.state.initialProjects;

		// console.log(this.state.namesArr);
		// console.log(this.state.typesArr);
		// let container;
		let filterOptions = this.state.initialProjects
			.map(el => el.type)
			.filter((el, i, arr) => arr.indexOf(el) == i)
			.map((el,i) => <option key={i} value={el}>{el.toUpperCase()}</option>);

		return (<Layout msgs={this.state.messages} activePageIndex={this.state.currentPageIndex}>
			<div className="projects module">
				<Notifications />
				<div className="jumbotron">
					<h1>Projects Editor</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum praesentium ipsam id qui dicta doloremque dolor minus laborum assumenda dolorum laboriosam nemo provident, vitae voluptates sint, est neque explicabo porro!</p>
				</div>
				{/* <ToastContainer ref={ref => container = ref} className='toast-top-right' /> */}
				{/* <button
					className="primary"
					onClick={() =>
						container.success(`Hi! Now is ${new Date()}`, `HOWDY!`, {
						closeButton: true,
						})
					}
				>
				Hello
				</button> */}
				{/* <button onClick={notify.show('Toasty!')}>Toast</button> */}
				<div className="row">
					<div className="col-md-4">
						<div className="card">
							<div className="card-header">
								Projects JSON
								<span className="float-right badge badge-pill badge-primary">{this.state.filteredProjects.length}</span>
							</div>
							<div className="card-body">
								<small><pre><code style={{background:'rgba(255,255,255,0.75)',color:'navy',padding:'0.325rem'}}>{JSON.stringify(this.state.filteredProjects,null,"  ")}</code></pre></small>
							</div>
						</div>
					</div>
					<ProjectsList selectedProject={this.state.selectedProject} allprojects={this.state.filteredProjects}>
					<div className="d-flex justify-content-between align-items-end">
						<div className="btn-group mb-2">
							<button className="btn btn-outline-info btn-sm" onClick={this.removeProject.bind(this)}>Remove</button>
							<button className="btn btn-outline-info btn-sm" onClick={this.addProject.bind(this)}>Add</button>
						</div>
						<div className="form-group mb-2">
							<label className="mb-0">filter by type...
								<select className="custom-select custom-select-sm" name="selectFilter" id="" defaultValue={'all'} onChange={this.handleFilter.bind(this)}>
									<option value='all'>ALL</option>
									{filterOptions}
								</select>
							</label>
						</div>
					</div>
					</ProjectsList>
				</div>
				<div className="row">
					<div className="col-md-4"></div>
					{/* <ProjectEdit /> */}
				</div>
			</div>
			<style jsx local>{`
				.projects {
					// border:0.25em solid green;
				}
			`}</style>
		</Layout>)
	}
};

export default Projects;