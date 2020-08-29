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
                        endYear={2019}
                        jobName="NYC Office of Environmental Remediation (OER) | NYC, NY"
                        jobtitle="Software Developer Intern"
                        jobDescription="•	Responsible for managing concept-to-launch; the new website for the Mayor’s Office of Environmental Remediation.
                        •	Ensured the technical feasibility and optimum functioning of design features and integration with TeamSite (CMS). 
                        •	Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed. 
                        "
                        />

<Experience
                        
                        startYear={2017}
                        endYear={2017}
                        jobName="Docflight | New York, New York"
                        jobtitle="Software Developer Intern"
                        jobDescription="•	Developed Advanced SQL queries and stored procedures to generate customer information.
                        •	Designed, implemented, and integrated LinkedIn API for doctor information.
                        •	Designed and developed views/templates on top of PHP, using Bootstrap templating engine.
                        •	Created and implemented custom CSS grid system with CSS media queries for mobile responsiveness.
                        "
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