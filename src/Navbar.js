import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item href="/"  name='Home'>
          Home
        </Menu.Item>

        <Menu.Item href="https://drive.google.com/open?id=1qxgsbqucXccKLcHIOhPdimjkNTSEUAku" name='Resume' target="_blank" rel="noopener noreferrer">
          Resume
        </Menu.Item>

        <Menu.Item href="/projects" name='Projects'>
          Projects
        </Menu.Item>
      </Menu>
    );
  }
}
