import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


function Contact () {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Elham Tahir Hussain</h2>
            <img
              src="./Assets/img/slicehead.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Web Developer with a background in Photoshop and Lightroom.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'lucinda', color: 'white'}}>
                    {/* <i className="fa fa-phone-square" aria-hidden="true"/> */}
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'lucinda', color: 'white' }}>
                    {/* <i className="fa fa-envelope" aria-hidden="true"/> */}
                    Elhamfabe@Gmail.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }

export default Contact;