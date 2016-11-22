import React from 'react';

var Url = React.createClass({
    render() {
        return(
            <div className="website">
                <a target="_blank" href={this.props.url}>- {this.props.name}</a>
            </div>
        )
    }
});

export default Url;