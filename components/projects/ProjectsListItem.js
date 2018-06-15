class ProjectsListItem extends React.Component {
	
	constructor(props) {
		super(props);
		console.log('ProjectsListItem props: ',props);
	}
	
	projectIcon(type) {
		switch (type) {
			case 'electrical':
				return 'fas fa-bolt'

			case 'plumbing':
				return 'fas fa-bath'

			case 'cabinetry':
				return 'fas fa-cubes'

			case 'masonry':
				return 'fas fa-graduation-cap'

			case 'furniture':
			case 'carpentry':
				return 'fas fa-tree'

			case 'lighting':
				return 'fas fa-lightbulb'

				default:
				break;
		}
	}

	render() {

        const { project, selectedProjectId, handleClick } = this.props;
		return (
            <li 
                key={project.id} 
                data-id={project.id}
                className={`list-group-item flex-column align-items-start ${project.id === selectedProjectId ? 'list-group-item-primary' : ''}`}
                onClick={handleClick}
            >
                <div className="project-row">
                    <span className={'project-icon '+this.projectIcon(project.type)}></span>
                    <span className={'project-checkbox '+(project.id === selectedProjectId?'fas fa-check-circle':'fas fa-circle')}></span>
                    <span className={'float-right badge '+project.type+' '+(project.id === selectedProjectId ? 'badge-primary' : 'badge-light')}>{project.type}</span>
                    <h5 className="mb-0">{project.name}</h5>
                </div>
                <small className="text-muted">id: {project.id}</small>
                <style jsx>{`
                    .list-group-item {
                        overflow:hidden;
                    }
                    .list-group-item:hover {
                        background:#f8f9fa;
                        opacity:0.75;
                        border:1px solid #ccc;
                    }
                    .project-row {
                    }
                    .project-icon,
                    .project-checkbox {
                        padding:0;
                        margin:0;
                        width:2.5rem;
                        height:2.5rem;
                        text-align:center;
                    }
                    .project-icon,
                    .project-icon:after,
                    .project-icon:before {
                        font-size:4rem;
                        float:right;
                        margin-left:0;
                        margin-right:0;
                        opacity:0.5;
                    }
                    .project-checkbox,
                    .project-checkbox:after,
                    .project-checkbox:before {
                        font-size:2rem;
                        float:left;
                        margin:0.25rem 0.5rem 0 0;
                        opacity:0.5;
                    }
                    .list-group-item-primary .project-checkbox,
                    .list-group-item-primary .project-checkbox:after,
                    .list-group-item-primary .project-checkbox:before {
                        opacity:1;
                    }
                `}</style>
            </li>
        );
	}
}

export default ProjectsListItem;