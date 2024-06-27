import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'
import {Link} from 'react-router'
import LyricCreate from './LyricCreate'

class SongDetail extends Component {
    render() {
        const { song } = this.props.data
        
        if(!song) { return <div>Loading...</div>}
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>SongDetail</h3>
                <LyricCreate songId={this.props.params.id} />
</div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables:  { id: props.params.id}}}
})(SongDetail)
