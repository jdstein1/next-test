import {notify} from 'react-notify-toast';

import Input from '../common/Input';
// import Button from '../common/Button';
import ProjectsListItem from './ProjectsListItem';

class ProjectsList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            myNotifyColors: { background: '#0E1717', text: "#eee" }
        }
    }
    
    componentWillMount() {
        this.setState({
            selectedProject: this.props.selectedProject
        })
    }

    handleEdit() {
        // console.log('START handleEdit: ', this.state.selectedProject);
        // open editor form with selected project info		
    }

    handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        // console.log('START handleClick -- target: ', e.target);
        // console.group('START handleClick');
        // console.dir(e.currentTarget);
        // change the selected project using click on list item
        for (let index = 0; index < this.props.allprojects.length; index++) {
            const el = this.props.allprojects[index];
            if (el.id === e.currentTarget.dataset.id) {
                // console.log(index);
                // console.log('el:', el.name);
                // console.log('el:', el.id);
                this.setState({
                    selectedProject: this.props.allprojects[index]
                }, () => {
                    notify.show('Selecting "'+this.state.selectedProject.name+'"','custom',1000,this.state.myNotifyColors);
                });
            }
        }
        // console.groupEnd();
    }

    handleChange(e) {
        // console.group('START handleChange: ', e.target.value);
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
                    this.setState({
                        selectedProject: this.props.allprojects[index]
                    }, () => {
                        notify.show('Selecting "'+this.state.selectedProject.name+'"','custom',1000,this.state.myNotifyColors);
                    });
                }
            }
        }
        // console.groupEnd();
    }

    changeChosen(e) {
        // console.log('START changeChosen: ', e.target.value);
        var stateCopy = Object.assign({}, this.state.selectedProject);
        stateCopy.name = e.target.value
        this.setState({selectedProject:stateCopy});
        
    }

    render() {

        const projectOptions = this.props.allprojects
            .map(project => {
                return <option key={project.id} value={project.id}>{project.name}</option>
        });

        return (
            <div className="col-md-8">
                    <h3>List of Projects</h3>
                {this.props.children}
                {/* <h5>selectedProjectId: {this.state.selectedProject.id}</h5> */}
                <ul className="projectList table table-hover list-group">
                    {
                        this.props.allprojects
                        .map((project,key) => {
                            return <ProjectsListItem 
                                key={key} 
                                project={project} 
                                selectedProjectId={this.state.selectedProject.id} 
                                handleClick={this.handleClick.bind(this)} 
                            />
                        })
                    }
                </ul>
                {/* <br/>
                <Input type='button-group' 
                    attrs={{
                        value:[
                            'Delete',
                            'Edit'
                        ], 
                        id:'buttons-b',
                        flavor:['secondary','primary']
                    }}>Modify Selected</Input> */}
                <hr/>
                <div className="form-group">
                    <legend>Choose Project:</legend>
                    <label htmlFor="select">
                        <select 
                            className="form-control" 
                            name="select" 
                            ref="myProjectSelect" 
                            value={this.state.selectedProject.id} 
                            onChange={this.handleChange.bind(this)} 
                        >
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
                <style jsx>{`
                `}</style>
            </div>
        );
    }
}

export default ProjectsList;