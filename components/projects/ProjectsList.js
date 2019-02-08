import React, { Component } from 'react';
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

    editProject = (e) => {
        // console.log('START editProject: ', selectedProject);
        // open editor form with selected project info		
    }

    clickProject = (e) => {
        console.group('START clickProject');
        e.stopPropagation();
        e.preventDefault();

        const {allprojects} = this.props;
        const {selectedProject} = this.state;

        // console.log('START clickProject -- target: ', e.target);

        console.dir(e.currentTarget.dataset.id);

        // change the selected project using click on list item
        for (let index = 0; index < allprojects.length; index++) {
            // console.log('index: ',index);
            const selected = allprojects[index];
            // console.log('selected: ',selected);
            if (selected.id === e.currentTarget.dataset.id) {
                console.log('match');
                if (selectedProject.id === selected.id) {
                    // unselect all projects
                    this.setState({
                        selectedProject: {}
                    }, () => {
                        notify.show('No project selected','custom',1000,this.state.myNotifyColors);
                    });
                } else {
                    // select matching project
                    this.setState({
                        selectedProject: selected
                    }, () => {
                        notify.show('Selecting "'+this.state.selectedProject.name+'"','custom',1000,this.state.myNotifyColors);
                    });
                }
            } else {
                console.log('NOT match');
            }
        }
        console.groupEnd();
    }

    changeProject = (e) => {
        // console.group('START changeProject: ', e.target.value);
        const {allprojects} = this.props;
        const {selectedProject} = this.state;
        // change the selected project using SELECT/OPTION menu
        if ( e.target.value!=='') {

            // console.log('START changeProject: ', this.refs.myProjectSelect.value);

            // console.info('projects: ', allprojects);

            // console.log(Object.keys(allprojects[0]));

            // get the index of the object in the array by looping over a key in each obj
            for (let index = 0; index < allprojects.length; index++) {
                const el = allprojects[index];
                if (el.id === e.target.value) {
                    this.setState({
                        selectedProject: allprojects[index]
                    }, () => {
                        notify.show('Selecting "'+selectedProject.name+'"','custom',1000,this.state.myNotifyColors);
                    });
                }
            }
        }
        // console.groupEnd();
    }

    changeChosen = (e) => {
        const {selectedProject} = this.state;
        // console.log('START changeChosen: ', e.target.value);
        const stateCopy = Object.assign({}, selectedProject);
        stateCopy.name = e.target.value
        this.setState({selectedProject:stateCopy});
        
    }

    render() {

        const {allprojects} = this.props;
        // console.log('allprojects: ', allprojects);
        
        const {selectedProject} = this.state;

        const projectOptions = allprojects.map(project => {
            return <option key={project.id} value={project.id}>{project.name}</option>
        });

        return (
            <React.Fragment>
                <h3>List of Projects</h3>
                {this.props.children}
                {/* <h5>selectedProjectId: {selectedProject.id}</h5> */}
                <ul className="projectList table table-hover list-group">
                    {
                        allprojects
                        .map((project,key) => {
                            return <ProjectsListItem 
                                key={key} 
                                project={project} 
                                selectedProjectId={selectedProject.id || null} 
                                handleClick={this.clickProject} 
                            />
                        })
                    }
                </ul>
                {/* <br/>
                <Input type='button-group' 
                    items={{
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
                            value={selectedProject.id || null} 
                            onChange={this.changeProject} 
                        >
                            <option value=''>choose...</option>
                            {projectOptions}
                        </select>
                    </label>
                </div>
                {selectedProject && selectedProject.name &&
                    <div className="form-group">
                        <legend>Chosen Project:</legend>
                        <label htmlFor="current">
                            <input className="form-control" name="current" type="text" value={selectedProject.name} readOnly />
                        </label>
                        <label htmlFor="chosen">
                            <input className="form-control" name="chosen" type="text" value={selectedProject.name} onChange={this.changeChosen} />
                        </label>
                        <pre><code style={{background:'rgba(255,255,255,0.75)',color:'navy',padding:'0.325rem'}}>{JSON.stringify(selectedProject,null,"  ")}</code></pre>
                    </div>
                }
                <style jsx>{`
                `}</style>
            </React.Fragment>
        );
    }
}

export default ProjectsList;