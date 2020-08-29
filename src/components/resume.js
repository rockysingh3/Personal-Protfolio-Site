import React, { Component } from 'react'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import { Grid, Cell } from 'react-mdl'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>

                        <div style={{textAlign: 'center'}}>

                            <img 
                            
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avator"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Rocky Singh</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>
                        Key features of my working style include adapting to various work cultures, identifying and resolving bottlenecks, and prioritizing.
                        I strongly believe in learning and sharing knowledge with my colleagues; "knowledge parted is knowledge gained" has been an important motto in my life. 
                        I am keen to learn and sharp at identifying and solving problems. 
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <h5>Address</h5>
                        <p>144-44 68th Ave, Flushing, NY 11367</p>
                        <h5>Phone</h5>
                        <p>(908) - 303 - 8177</p>
                        <h5>Email</h5>
                        <p>rockygsingh@yahoo.com</p>
                        
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Education</h2>

                        <Education
                        
                        startYear={2017}
                        endYear={2021}
                        schoolName='Queens College'
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>


                        <h2>Experience</h2>

                        <Experience
                        
                        startYear={2017}
                        endYear={2021}
                        jobName="NYC Office of Environmental Remediation (OER) | NYC, NY"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the "
                        />

<Experience
                        
                        startYear={2017}
                        endYear={2021}
                        jobName="Second Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the "
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>


                        <h2>Skills</h2>
                        <Skills
                            skills='javascript'
                            progress={75}
                        />
                        <Skills
                            skills='Java'
                            progress={70}
                        />
                        <Skills
                            skills='HTML/CSS'
                            progress={100}
                        />
                        <Skills
                            skills='React'
                            progress={100}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;