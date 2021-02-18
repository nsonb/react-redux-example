import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchOneStream } from '../../action'

const StreamShow = (props) => {
    useEffect(() => {
        props.fetchOneStream(props.match.params.id)
    }, [])

    if(!props.stream) return <div>Loading...</div>
    return (
        <div>
            <h1>{props.stream.title}</h1>
            <h5>{props.stream.description}</h5>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchOneStream})(StreamShow)