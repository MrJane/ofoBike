import React, {Component} from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Carousel>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}

export default Carousel