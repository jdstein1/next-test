
import Button from '../common/Button';
import ButtonGroup from '../common/ButtonGroup';

class ProjectsListItem extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	// console.log('ProjectsListItem props: ',props);
	// }

    classesListItem(id, selectedProjectId) {
        return `list-group-item d-flex flex-container flex-row justify-content-start align-items-center ${id === selectedProjectId ? 'list-group-item-primary' : ''}`;
    }
    classesCheckbox(id, selectedProjectId) {
        return `project-checkbox flex-grow-0 ${id === selectedProjectId ? 'fas fa-check-circle':'fas fa-circle'}`;
    }

    classesIcon() {
        const prefix = 'project-icon fas fa-';
        switch (this.props.project.type) {
            case 'electrical':
                return prefix + 'bolt';

            case 'plumbing':
                return prefix + 'bath';

            case 'cabinetry':
                return prefix + 'cubes';

            case 'masonry':
                return prefix + 'graduation-cap';

            case 'furniture':
                return prefix + 'tree';
    
            case 'carpentry':
                return prefix + 'tree';

            case 'lighting':
                return prefix + 'lightbulb';

            default:
                break;
        }
    }

    editItem = (e) => {
        console.log('START editItem: ', e.target);
    }

    deleteItem = (e) => {
        console.log('START deleteItem: ', e.target);
    }

	render() {

        const { project, selectedProjectId, handleClick } = this.props;

        const { id, type, name } = project;

        return (
            <li 
                key={id} 
                data-id={id}
                className={this.classesListItem(id, selectedProjectId)}
                onClick={handleClick}
            >
                <div className={this.classesCheckbox(id, selectedProjectId)}></div>
                <div className="project-info align-self-start flex-grow-1">
                    <h3 className="mb-0">{name}</h3>
                    <h5>{type}</h5>
                    <code className="text-muted">id: {id}</code>
                </div>
                <div className="project-badge flex-grow-1">
                    <div className={this.classesIcon()}></div>
                </div>
                <div className="project-action flex-grow-1 ml-auto">
                    <ButtonGroup
                        settings={{inline:true}}
                    >
                        <Button label='Delete' flavor='secondary' type='button' onClick={this.deleteItem} />
                        {/* <Button label='Edit' flavor='primary' type='submit' onClick={this.editItem} /> */}
                    </ButtonGroup>
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