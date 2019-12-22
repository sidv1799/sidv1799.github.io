import React from 'react';
import {Container, Icon} from 'semantic-ui-react';

export default class Links extends React.Component {
    render() {
        return (
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
        );
    }
}

