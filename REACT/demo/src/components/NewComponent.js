import React, { Component } from 'react';

class NewComponent extends Component {
    render() {
        const { header, children } = this.props;
        return (
            <div>
                <h1>{header}</h1>
                {children}
            </div>
        );
    }
}

export default NewComponent;