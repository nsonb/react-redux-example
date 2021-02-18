import { fetchAllStream } from '../../action'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchAllStream()
    }

    renderAdmin(stream) {
        return stream.userId !== this.props.currentUserId ? null : (<div>
            <Link to={`/streams/edit/${stream.id}`} style={{margin: '5px'}}
                >Edit
            </Link>
            <Link to={`/streams/delete/${stream.id}`} style={{margin: '5px'}}>Delete</Link>
        </div>)
    }

    renderCreate() {
        if(this.props.isSignedIn) return <Link to='/streams/new' style={{margin: '5px'}}>Create new Stream</Link>
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div key={stream.id} style={{margin: '10px'}}>
                    <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
                    <div>{stream.description}</div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return(<div>
            StreamList
            {this.renderList()}
            {this.renderCreate()}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}



export default connect(mapStateToProps, {fetchAllStream})(StreamList)