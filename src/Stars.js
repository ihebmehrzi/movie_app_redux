import React, { Component } from 'react';



class Stars extends Component {

    render() {
        let tab = []
        for (let i = 0; i < 5; i++) {
            if (this.props.rating > i) {
                tab.push(<i onClick={() => this.props.stars(i + 1)} className="fas fa-star"></i>)
            } else {
                tab.push(<i onClick={() => this.props.stars(i + 1)} className="far fa-star"></i>)
            }
        }

        return (
            <div>
                {tab}
            </div>
        )
    }
}

export default Stars;
