import React from "react";

class ProjectEdit extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// };
		console.log(props);
	}

	handleEdit(e) {
		console.log('START handleEdit: ', e.target);
		// console.log(this.props.project);
	}

	cancelEdit(e) {
		console.log('START cancelEdit: ', e.target);
	}

	saveEdit(e) {
		console.log('START saveEdit: ', e.target);
	}

	handleChange(e) {
		console.log('START handleChange: ', e.target);
	}

	render() {
		return (<div className="col-md-8">
			{/* <input className="btn primary full-width" type="button" value="Edit Project" /> */}
			<button className="btn btn-info btn-block" onClick={this.handleEdit.bind(this)}>Edit Project</button>
			<hr/>
			<div className="card card-body">
				<h3>Edit Project:</h3>
				{this.project}
				<form action="">
					<fieldset className="form-group">
						<label htmlFor="id">
							{/* <span>ID:</span> */}
							<input className="form-control" placeholder="ID" name="id" type="text" readOnly value={this.props.project.id}/>
						</label>
						<label htmlFor="name">
							{/* <span>Name:</span> */}
							<input className="form-control" placeholder="Name" name="name" type="text" onChange={this.handleChange.bind(this)} value={this.props.project.name}/>
						</label>
						<label htmlFor="type">
							{/* <span>Type:</span> */}
							<input className="form-control" placeholder="Type" name="type" type="text" onChange={this.handleChange.bind(this)} value={this.props.project.type}/>
						</label>
					</fieldset>
					<div className={'form-group'}>
						<input className={'form-control btn btn-outline-info'} type="reset" onClick={this.cancelEdit.bind(this)} value="Cancel" />
						<input className={'form-control btn btn-info'} type="submit" onClick={this.saveEdit.bind(this)} value="Save" />
					</div>
				</form>
			</div>
			<style jsx local>{`
			`}</style>
		</div>);
	}
}

export default ProjectEdit;