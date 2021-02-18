import Modal from '../Modal'
import React, { useEffect } from 'react'
import history from '../../history'
import { Link } from 'react-router-dom'
import { fetchOneStream, deleteStream } from '../../action'
import { connect } from 'react-redux'

const StreamDelete = (props) => {
    useEffect(() => {
        props.fetchOneStream(props.match.params.id)
    }, [])
    const actions = (
        <>
            <button onClick={() => {
                props.deleteStream(props.match.params.id)
            }}>Delete</button>
            <Link to='/'>Cancel</Link>
        </>
    )

    const renderContent = () => {
        if(!props.stream) {
            return 'Delete this stream?'
        } else {
            return `Delete Stream title ${props.stream.title}`
        }
    }
    return (
        <Modal 
            title={renderContent()}
            content='Are you sure to delete?'
            actions= {actions}
            onDismiss={() => {history.push('/')}}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchOneStream, deleteStream})(StreamDelete)