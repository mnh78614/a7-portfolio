import React, { Component } from 'react';

import {Row, Col} from 'react-grid-system';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class About extends Component {
  render() {
    return (
      <Row>

        <Col sm={12} md={4}>
          <Card>
            <CardMedia
            >
              <img src="../img/about.jpg" />
            </CardMedia>
            
          </Card>
        </Col>

        <Col sm={12} md={8}>
          <Card>
            <CardTitle title="About Me" />
            <CardText>
              I was born and raised in the greater Boston Massachusetts area. Ever since I was a child I have been fascinated with what technology does and how it can empower other people. Seeing commercials on TV like how companies like Google, Microsoft, Amazon and Apple use their technology to provide solutions to their consumers made me want to be able to design user interfaces. Technology is growing at an exponential rate, and there needs to be someone who can translate the complexity of code to a simple UI, and that’s what I hope to do one day.
            </CardText>
          </Card>
          <br/>
        </Col>

        <Col sm={12} md={8}>
          <Card>
            <CardTitle title="Skills" subtitle="What I'm Good At"/>
            <CardText>
              <ul>
                <li>User Experience Desing</li>
                <li>User Centered Design</li>
                <li>Human Computer Interaction</li>
                <li>Public Speaking</li>
                <li>Leadership</li>
                <li>Project Management</li>
                <li>Conflict Resolution</li>
                <li>Customer Service</li>
              </ul>
            </CardText>
          </Card>
          <br/>
        </Col>

    <Col sm={12} md={12}>
          <Card>
            <CardTitle title="Inspiration" subtitle="My childhood heroTa"/>
            <CardMedia
            >
              <img src="https://nesncom.files.wordpress.com/2015/08/david-ortiz-home-run.jpg" />
            </CardMedia>
          </Card>
          <br/>
        </Col>
      </Row>
    );
  }
}

export default About;
