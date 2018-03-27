import React from 'react';

const Project = (props) => (
    <article className="dib mr3 br2 ba dark-gray b--black-10 mv5 w-100 w-50m w-30-l shadow-4">
        <div style={{maxHeight:'200px', overflow:'hidden'}}>
            <img className="db w-100 br2 br--top dim" src={props.img} alt={props.alt} />
        </div>
        <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
                <div className="dtc">
                    <h1 className="f5 f4-ns mv0">{props.title}</h1>
                    <p className="f6 lh-copy measure mt2 mid-gray">{props.description}</p>
                </div>
            </div>
        </div>
    </article>
)

export default Project;