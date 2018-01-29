import React from 'react';
import './NewsPost.css';

export default class NewsPost extends React.Component {
    render() {
        return (
            <div className='news-post'>
                <p>{ this.props.text }</p>
            </div>
        )
    }
}