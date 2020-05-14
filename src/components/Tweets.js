import React from 'react';
import './Tweets.css'

// PLACEHOLDER - REPLACE - 
const TwitterLogo = 'https://api.adorable.io/avatars/190/abott@adorable.png'

class Tweets extends React.Component {
    render() {
        return (
            <div className='tweets'>
                <div className='tweet'>
                    <div className='author'>
                        <img src={'https://api.adorable.io/avatars/190/abott@adorable.png'} alt='user-avatar' />
                        <strong>@Jayden</strong>
                    </div>
                    <div className='content'>
                        <div className='twitter-logo'>
                            <img src={TwitterLogo} alt='twitter-logo' />
                        </div>
                        <textarea autoFocus className='editTextarea' value='' onChange='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweets