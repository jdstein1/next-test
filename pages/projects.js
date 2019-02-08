import Notifications, {notify} from 'react-notify-toast';
// import { ToastContainer } from "react-toastr";
// import { ToastMessage } from "react-toastr";

import Utils from '../utils';
import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
// import Input from '../components/common/Input';
import ProjectsList from '../components/projects/ProjectsList';
import ProjectsJSON from '../components/projects/ProjectsJSON';
import ProjectEdit from '../components/projects/ProjectEdit';

const namesArr = ['Chair','Couch','Door','Stool','Ladder','Bathtub','Wet Bar','Soaker','Fridge','Ceiling Fan','Cove Lighting','Track Lights','Picture Frame'];
const typesArr = ['electrical','plumbing','carpentry','masonry','cabinetry','furniture','lighting'];
const initialProjects = [
    {id:'8573018871544508', name:'Sink', type:'plumbing'},
    {id:'1901643262355224', name:'Hutch', type:'cabinetry'},
    {id:'6675232492533718', name:'Bench', type:'furniture'},
    {id:'3078772871106959', name:'Lamp', type:'electrical'},
    {id:'4744225098351415', name:'Chandelier', type:'lighting'},
    {id:'1584785379198456', name:'Bed', type:'furniture'}
];
const messages = [
    {id:1, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'Projects Warning'},
    {id:2, kind:'success', text:'Lorem ipsum dolor sic amet...', lede:'Projects Success'},
];

class Projects extends React.Component {

	constructor(props) {
		// console.log('props: ', props);

		super(props);
		this.state = {
			currentPageIndex:3,
			title:'Projects Editor',
			initialProjects,
			currentFilter: 'all',
			filteredProjects: [],
			myNotifyColors: { background: '#0E1717', text: "#eee" }
		}
		// console.log('this.state: ', this.state);
		this.show = notify.createShowQueue();
	}

    componentWillMount() {
        this.setState({
			filteredProjects: this.state.initialProjects,
            // selectedProject: this.state.initialProjects[1],
            // selectedProject: this.selectInitialProject(),
            selectedProject: {},
			messages
        }, () => {
			// console.log('this.state: ', this.state);	
		})
    }
    
    selectInitialProject() {
        const rand = Math.floor(Math.random() * Math.floor(this.state.initialProjects.length));
        return this.state.initialProjects[rand];
    }
	
	removeProject(e) {
		// console.group('START removeProject');

		// notify.show(message, type, timeout, color)
		notify.show('Removed "'+this.state.initialProjects[this.state.initialProjects.length-1].name+'"','custom',1000,this.state.myNotifyColors);

		this.state.initialProjects = this.state.initialProjects.slice(0,this.state.initialProjects.length-1);
		this.setState({filteredProjects: this.state.initialProjects}, () => {
			// console.log('this.state.initialProjects: ', this.state.initialProjects.length);
			// console.log('this.state.filteredProjects: ', this.state.filteredProjects.length);
		});
		// console.groupEnd();
	}

	addProject(e) {
		// console.group('START addProject');
		const newProject = {
			id:this.newId(this.state.initialProjects.length),
			name: Utils.getRandMember(namesArr),
			type: Utils.getRandMember(typesArr)
        };        

		notify.show('Added "'+newProject.name+'"','custom',1000,this.state.myNotifyColors);

		this.state.initialProjects = this.state.initialProjects.concat(newProject);
		this.setState({filteredProjects: this.state.initialProjects}, () => {
			// console.log('this.state.initialProjects: ', this.state.initialProjects.length);
			// console.log('this.state.filteredProjects: ', this.state.filteredProjects.length);
		});
		// console.groupEnd();
	}

	handleFilter(e) {
		// console.log('START handleFilter: ', e.target.value);
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

	// getRandMember(arr) {
	// 	return arr[Math.floor(Math.random() * arr.length)];
	// }

	newId(salt) {
		// const id = Math.round((Math.random())*Math.pow(10,16),16);
		const ida = (Math.random()+' ').substring(2,10);
		const idb = (Math.random()+' ').substring(2,10);
		const id = ida + idb;
		// console.log('id: ', id);
		return id;
	}

	render() {

        const { filteredProjects } = this.state;

        // let filteredProjects = this.state.initialProjects;
        // this.selectInitialProject();

		// console.log(namesArr);
		// console.log(typesArr);
		// let container;
		let filterOptions = this.state.initialProjects
			.map(el => el.type)
			.filter((el, i, arr) => arr.indexOf(el) == i)
			.map((el,i) => <option key={i} value={el}>{el.toUpperCase()}</option>);

		return (<Layout msgs={this.state.messages} activePageIndex={this.state.currentPageIndex}>
			<div className="projects module">
				<Notifications />
                <Jumbotron title={this.state.title} />
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
                    <div className="col-md-8">
					    <ProjectsList selectedProject={this.state.selectedProject} allprojects={this.state.filteredProjects}>
                            <div className="d-flex justify-content-between align-items-end">
                                {/* TODO: refactor Input component so this works */}
                                {/* <Input 
                                    type='button-group' 
                                    items={{}}
                                    items={{
                                        id:'actions',value:['Remove','Add'],flavor:'info'
                                    }}
                                    classes={['btn-outline-info','btn-sm']}
                                >Actions</Input> */}
                                <div className="btn-group mb-2">
                                    <button className="btn btn-outline-info btn-sm" onClick={this.removeProject.bind(this)}>Remove</button>
                                    <button className="btn btn-outline-info btn-sm" onClick={this.addProject.bind(this)}>Add</button>
                                </div>
                                <div className="form-group mb-2">
                                    {/* TODO: refactor Input component so this works */}
                                    {/* <Input 
                                        type="select" 
                                        items={{
                                            id:'select-filter2',value:filterOptions,flavor:'primary'
                                        }}
                                        classes={['custom-select','custom-select-sm']}
                                    >filter by type...</Input> */}
                                    <label className="mb-0">filter by type...
                                        <select className="custom-select custom-select-sm" name="selectFilter" id="select-filter" defaultValue={'all'} onChange={this.handleFilter.bind(this)}>
                                            <option value='all'>ALL</option>
                                            {filterOptions}
                                        </select>
                                    </label>
                                </div>
                            </div>
    					</ProjectsList>
                    </div>
					<div className="col-md-4">
                        <ProjectsJSON json={filteredProjects} />
					</div>
				</div>
			</div>
            <style jsx local>{`
            .json {
                background: rgba(255,255,204,1);
                color: blue;
                padding: 0.325rem;
            }
			`}</style>
		</Layout>)
	}
};

export default Projects;
