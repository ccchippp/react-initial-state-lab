import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    increment = () => {
        const nextSlideIndex = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: nextSlideIndex
        })
    }

    render() {
        return (
            <div onClick={this.increment}>
                {'I am on slide ' + this.state.currentSlideIndex}
            </div>
        )
    }
}
export default ImageSlider