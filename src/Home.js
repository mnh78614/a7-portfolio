import React, { Component } from 'react';

import {Row, Col} from 'react-grid-system';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  image: {
    maxWidth: 400,
    maxHeight: 400,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}
class Home extends Component {
  render() {
    return (
          <Card>
            <CardMedia style={styles.image}
              className="profilepic">
              <img src="/img/portfoliopic.jpg" />
            </CardMedia>
            
            <CardText>
            <em>An aspiring designer on a journey to empower people with technology</em>
            </CardText>
          </Card>
    );
  }
}

export default Home;
