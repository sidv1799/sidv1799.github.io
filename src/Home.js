import React from 'react';
import {Image, Header, Grid, Container, Icon, Flag, Divider} from 'semantic-ui-react';
import pic from './assets/picture.jpg';
import './App.css';
import ContactForm from './ContactForm';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header size="huge">Sidharth Venkatesh</Header>
                <div className="padded-grid">
                    <Grid centered columns={2} padded divided>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src={pic} size='large' circular />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="item-centered">
                                    <h3>Purdue University - Computer Science</h3>
                                    <h3>Class of 2021</h3>
                                    <h3>I thought it would be a fun idea to build a personal website to showcase some of the things that do not fit in my 1-page resume</h3>
                                    <h4>Send me a message through the contact form if there is anything you'd like to say :)</h4>
                                    <Flag name='india' />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider hidden />
                    </Grid>
                </div>
                <ContactForm />                                 
            </div>
        );
    }
}