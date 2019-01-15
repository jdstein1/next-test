import Input from '../common/Input';

class ProjectsListItem extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	// console.log('ProjectsListItem props: ',props);
	// }

    projectIcon() {
		switch (this.props.project.type) {
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

        const { id, type, name } = project;

        return (
            <li 
                key={id} 
                data-id={id}
                className={`list-group-item d-flex flex-container flex-row justify-content-start align-items-center ${id === selectedProjectId ? 'list-group-item-primary' : ''}`}
                onClick={handleClick}
            >
                <div className={'project-checkbox flex-grow-0 '+(id === selectedProjectId ? 'fas fa-check-circle':'fas fa-circle')}></div>
                <div className="project-info align-self-start flex-grow-1">
                    <h5 className="mb-0">{name}</h5>
                    <small className="text-muted">id: {id}</small>
                </div>
                <div className="project-action flex-grow-1 ml-auto">
                    {/* <Input type="button-group" items={{value:['Delete','Edit'],flavor:['secondary','primary']}}>Delete</Input> */}
                    {/* <InputGroup type="button" items={[{label:'Delete',flavor:'secondary'},{label:'Edit',flavor:'primary'}]} /> */}
                </div>
                <div className="project-badge align-self-end flex-grow-1">
                    <div className={'badge mt-auto mb-auto '+type+' '+(id === selectedProjectId ? 'badge-primary' : 'badge-light')}>{type}</div>
                    <div className={'project-icon '+this.projectIcon()}></div>
                </div>
                <style jsx>{`
                    .list-group-item {
                        overflow:hidden;
                    }
                    .list-group-item:hover {
                        background:#f8f9fa;
                        opacity:0.75;
                        border:1px solid #ccc;
                    }
                    .project-icon,
                    .project-checkbox {
                        padding:0;
                        margin:0;
                        width:2.5rem;
                        height:2.5rem;
                        text-align: center;
                    }
                    .project-action {
                        margin: 0 1rem;
                    }
                    .project-badge {
                        position: relative;
                        width: 5rem;
                        // background: rgba(255,127,0,0.125);
                    }
                    .project-icon,
                    .project-icon:after,
                    .project-icon:before {
                        font-size: 6rem;
                        margin-left: 0;
                        margin-right: 0;
                        opacity: 0.5;
                        position: absolute;
                        top: -1rem;
                        right: -1rem;
                        bottom: 0;
                        left: auto;
                    }
                    .badge {
                    }
                    .project-checkbox,
                    .project-checkbox:after,
                    .project-checkbox:before {
                        font-size:2rem;
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