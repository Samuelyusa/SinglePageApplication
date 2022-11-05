import React from 'react';

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className='page-not-found'>
                <div className='page-not-found__body'>
                    <h1>Ooops!</h1>
                    <h2>404 Page Not Found</h2>
                    <p>The page you're looking for might have been removed</p>
                    <p>had its name changed or is temporarily unavailable</p>
                </div>
            </div>
            
        );
    }
}

export default PageNotFound;