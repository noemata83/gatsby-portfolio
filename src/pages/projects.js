import React  from 'react';
import Layout from '../components/layout';

import Project from '../components/Project/Project';

import classes from './projects.module.css';
import { StaticQuery, graphql } from 'gatsby';

const Projects = () => (
        <StaticQuery
            query={graphql`
            query ProjectQuery {
                allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex:"/data/.*.md$/"}}
                  ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                techStack
                                imageURL{
                                	childImageSharp {
                                        fluid(maxWidth: 865) {
                                        sizes
                                        src
                                        aspectRatio
                                        srcSet
                                        }
                                  }
                                }
                                demo
                                description
                                repo
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={data => (<Layout>
            <div className="center mw8 mt4 pv4 ph3">
                <div className="db">
                    <div className={[classes.Header, "tc v-mid fl h3 w-100 black-70 mb3 mr5"].join(' ')}>
                        <div className="h-100 w-100 relative">
                            <div className="absolute dib" style={{border:"1px solid white", height: '90%', width: '98%', top: '5%', left: '1%'}}>
                                <h1 className="dib absolute fw3 white ma0" style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>projects</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="db f3 w-100 flex-ns flex-wrap-ns justify-between">
                    {data.allMarkdownRemark.edges.map(({node}) => 
                    <Project
                            key={node.id}
                            title={node.frontmatter.title}
                            description={node.frontmatter.description}
                            img={node.frontmatter.imageURL.childImageSharp.fluid}
                            alt={node.frontmatter.title}
                            stack={node.frontmatter.techStack}
                            demo={node.frontmatter.demo}
                            repo={node.frontmatter.repo}
                            detail={node.html}
                            />)}    
                </div>
            </div>
        </Layout>)}
        />);


export default Projects