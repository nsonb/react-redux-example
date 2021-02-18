import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from './action'

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '1092258273935-419e22v431qr8tp767qaqlnfa637mu3d.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton () {
        if(this.props.isSignedIn === null) {
            return null
        } else if(this.props.isSignedIn){
            return <button onClick = {this.onSignOutClick}>Sign Out</button>
        } else if(!this.props.isSignedIn) {
            return <button onClick = {this.onSignInClick}>Sign In</button>
        }
    }
    render () {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProp, {signIn, signOut})(GoogleAuth)