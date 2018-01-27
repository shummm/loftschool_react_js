import React from 'react';
import './NewsPost.css';

export default class NewsPost extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className = 'news-post'>
                    <p>{children}</p>
            </div>
        )
    }
}