import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchOneStream, editStream } from '../../action'
import StreamForm from './StreamForm'
import _ from 'lodash'

const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchOneStream(props.match.params.id)
    }, [])

    const onSubmit = (formValues) => {
        props.editStream(props.stream.id, formValues)
    }
    if(props.stream === undefined) return <div>Loading</div>
    return(
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm initialValues={_.pick(props.stream, 'title' , 'description')} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchOneStream, editStream})(StreamEdit)