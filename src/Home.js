import React from 'react';
import {Image, Header, Grid, Container, Icon} from 'semantic-ui-react';
import pic from './picture.jpg';
import './App.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Header as='h1' size="huge">Sidharth Venkatesh</Header>
                <div className="padded-grid">
                    <Grid centered columns={2} padded divided>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src={pic} size='large' circular />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="item-centered">
                                    <h3>Purdue University Computer Science</h3>
                                    <h3>Class of 2021</h3>
                                </div>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                    <Container>
                        <a href="https://www.linkedin.com/in/sidharth-venkatesh/" target="_blank" rel="noopener noreferrer">
                            <Icon name='linkedin' size="huge"/>
                        </a>
                        <a href="https://github.com/Sid-V" target="_blank" rel="noopener noreferrer">
                            <Icon name='github' size="huge"/>
                        </a>
                        <a href="https://www.facebook.com/sidharth.venkatesh" target="_blank" rel="noopener noreferrer">
                            <Icon name='facebook' size="huge"/>
                        </a>
                        <a href="mailto:sidv@purdue.edu" target="_blank" rel="noopener noreferrer">
                            <Icon name='mail' size="huge"/>
                        </a>

                    </Container>
                </div>

                    
                                    
            </div>
        );
    }
}