import React from 'react';

const Project = (props) => (
    <article className="dib br2 ba dark-gray b--black-10 mv3 mw-100 mw5-m-l shadow-4" style={{flexBasis:'45%'}}>
        <div className="hide-child relative center v-mid" style={{maxHeight:'300px', overflow:'hidden'}}>
            <div className="child absolute dib w-100 h-100 bg-black-40 pointer" style={{top: 0, left: 0, zIndex:2}}>
                <span className="white dtc v-mid center absolute" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Click for more</span>
            </div>
            <img className="db w-100 br2 br--top dim" src={props.img} alt={props.alt} />
        </div>
        <div className="pa4 ph4-ns pb4-ns">
            <div className="dt w-100 mt1">
                <div className="dtc">
                    <h1 className="f5 f4-ns mv0">{props.title}</h1>
                    <p className="f6 lh-copy measure mt2 mid-gray">{props.description}</p>
                    <p className="f6 v-btm"><strong>Tech Stack</strong>: {props.stack}</p>
                </div>
            </div>
        </div>
    </article>
)

export default Project;