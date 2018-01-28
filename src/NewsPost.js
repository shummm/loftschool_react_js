import React from 'react';
import './NewsPost.css';

export default class NewsPost extends React.Component {
    render() {
        const {children} = this.props;

        return (
            children.map((post, idx) =>
                <div className = 'news-post' key={idx}>
                    <p>{ post }</p>
                </div>
            )
        )
    }
}