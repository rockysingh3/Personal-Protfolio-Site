import React, { Component } from 'react'
//import { render } from '@testing-library/react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="images/download.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p>React | JavaScript | NodeJS | Bootstrap | HTML/CSS | Express | MongoDB</p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/rocky-singh-b6407010b/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/rockysingh3" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>                        

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;