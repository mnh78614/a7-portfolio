import React, { Component } from 'react';

import Url from './Url';

import Baby from 'babyparse';
import $ from 'jquery';

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
};

var Work = React.createClass({
    getInitialState:function() {
        return ({
            url: [],
            
        });
    },
    
  componentDidMount:function(){
      $.get('data/url.csv').then(function(data) {
        var parsed = Baby.parse(data, {header:true});
        this.setState({url:parsed.data});
      }.bind(this));
    },
  render:function() {

    

    return (
    	<div>

      <Card>
            <CardMedia style={styles.image}>
            {this.state.url.map(u => {
        <CardTitle url={u}>TITLE</CardTitle>
        })
  }
              <img src="http://beardalicious.com/wp-content/uploads/2015/07/coming-soon.jpg"
                alt=''/>
            </CardMedia>
            <CardText>
              Website is currently under construction
            </CardText>
          </Card>
          <br/>

          <Card>
            <CardMedia style={styles.image}
              overlay={<CardTitle title="Spotify Assignment"/>}
            
            >
              <img src="../img/a6.jpg"
              	alt=''
              	/>
            </CardMedia>
            <CardText>
            <a href="https://students.washington.edu/muhamh/info343/a5-spotify-mnh78614/">
              Using the Soptify API and ReactJS to recreate Spotify
                             </a>
            </CardText>
          </Card>
            <br/>

          <Card>
            <CardMedia style={styles.image}
              overlay={<CardTitle title="Police Shootings" />}
            
            >
              <img src="../img/a3.jpg"
                alt=''
                />
            </CardMedia>
            <CardText>
                             <a href="https://students.washington.edu/muhamh/info343/a3-mapping-mnh78614/">
              Applying JavaScript and jQuery to map out police shootings from a csv file to display on leaflet map.
                             </a>
            </CardText>
          </Card>
          <br/>
          <Card>
            <CardMedia style={styles.image}
              overlay={<CardTitle title="Pencil Assignment"/>}
            >
              <img src="../img/a2.jpg"
                alt=''
                />
            </CardMedia>
            <CardText>
                             <a href="https://students.washington.edu/muhamh/info343/a2-html-css-mnh78614/">
              Applying HTML and CSS to create a complex website about a pencil.
                             </a>
            </CardText>
            <br/>
          </Card>
          </div>


    );
  }
});

export default Work;
