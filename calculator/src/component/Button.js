import React, { Component } from 'react'
import PropType from 'prop-types'
import "./Button.css"

export default class Button extends Component {

    static propType = {
        name: PropType.string,
        orange: PropType.bool,
        wide: PropType.bool,
        clickHandler: PropType.func
    }

    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }

    
    render() {
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : ""

        ]
        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}