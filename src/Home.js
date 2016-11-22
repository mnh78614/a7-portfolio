import React, { Component } from 'react';

import {Container, Row, Col} from 'react-grid-system';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  card: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600
  },
    image: {
    maxWidth: 400,
    maxHeight: 800
    }
};
class Home extends Component {
  render() {
    return (
        <Container>
          <Card>
            <CardMedia style={styles.card}
              className="profilepic">
              <img src="/img/portfoliopic.jpg" style={styles.image}/>
            </CardMedia>
            
            <CardText style={{textAlign: 'center'}}>
            <em>An aspiring designer on a journey to empower people with technology</em>
            </CardText>
          </Card>
        </Container>
    );
  }
}

export default Home;
