import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={e => this.props.search(e.target.value)} type="text" placeholder="Type movie name to search" />
            </div>
        )
    }
}


export default Search