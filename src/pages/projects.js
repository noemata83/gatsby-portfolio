import React, { Component }  from 'react';
import PageTitle from '../components/PageTitle/pageTitle';
import Parser from 'html-react-parser';

import Project from '../components/Project/Project';
import Modal from '../components/UI/Modal/Modal';

class Projects extends Component {
    state = {
        showModal: false,
        detail: ''
    }

    showDetail = (detail) => {
        this.setState({showModal: true,
        detail });
    }

    closeModalHandler = () => {
        this.setState({showModal: false, detail: ''});
    }

    render() {
        const projects = this.props.data.allMarkdownRemark.edges.map(({node}) => 
        <Project
                key={node.id}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                img={node.frontmatter.image}
                alt={node.frontmatter.title}
                stack={node.frontmatter.techStack}
                detail={this.state.showModal}
                showDetail={this.showDetail}
                closeModal={this.closeModalHandler}
                detail={node.html}
                />);
        return (
        <div className="center mw8 mt4 pv4 ph2-m">
            <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>{Parser(this.state.detail)}</Modal>
            <div className="db">
                <div className="tc v-mid fl h3 w-100 black-70 mb3 mr5" style={{backgroundImage:'url("/static/background.jpg")', backgroundSize: '100%', backgroundOrigin: 'border-box', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
                    <div className="h-100 w-100 relative">
                        <div className="absolute dib" style={{border:"1px solid white", height: '90%', width: '98%', top: '5%', left: '1%'}}>
                            <h1 className="dib absolute fw3 white ma0" style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>projects</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="db f3 w-100 flex-ns flex-wrap-ns justify-between">
                {projects}    
            </div>
        </div>
    );
    }
}

export const query = graphql`
    query ProjectQuery {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex:"/data/.*\\.md$/"}}
          ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        techStack
                        image
                        demo
                        description
                    }
                    html
                }
            }
        }
    }
`

export default Projects