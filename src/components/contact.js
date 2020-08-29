import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">

                    {/* left side */}
                    <Cell col={6}>
                        <h2>Rocky Singh</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>

                            randomm dashfhso;hfo sd;ho;sdhf jdlksjljoiedioppoljdsl sdjljfo'const [fdjljd] 
                            = arrayToDestruct; sjjd
                             djlj
                        </p>
                    
                    
                    </Cell>
                    {/* right side */}
                    <Cell col={6}>
                        <h1>Contact Me</h1>
                        <hr/>

                        <diiv className="contact-list">

                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true" />
                                (908) 303 - 8177 </ListItemContent>
                        </ListItem>

    

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                                rockygsingh@yahoo.com </ListItemContent>
                        </ListItem>


                        
                        
                    </List>


                        </diiv>

                   
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Contact;