// import React, { Component } from 'react';

class ProjectsJSON extends React.PureComponent {
    
    render() {

        const { json } = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    Projects JSON
                    <div className="float-right"><span className="small">count:</span> <span className="badge badge-pill badge-primary">{json.length}</span></div>
                </div>
                <div className="card-body">
                    <small><pre><code className='json'>{JSON.stringify(json,null,"  ")}</code></pre></small>
                </div>
                <style jsx>{`
                    .json {
                        background: rgba(255,255,204,1);
                        color: blue;
                        padding: 0.325rem;
                    }
                `}</style>
            </div>
        );
    }
}

export default ProjectsJSON;