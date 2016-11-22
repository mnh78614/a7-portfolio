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

class Work extends Component {
  render() {
    return (
    	<div>
          <Card>
            <CardMedia style={styles.image}
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            
            >
              <img src="http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMDU4NTc3NDIy.jpg"
              	alt=''
              	/>
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          </div>
    );
  }
}

export default Work;
