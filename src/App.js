import React from 'react';
import NewsPost from './NewsPost';
import './App.css';

export default class App extends React.Component {
    state = {
        tempNews: {
            text: '',
        },
        newsInput: '',
        news: []
    };



    handleChange = e => {
        this.setState({ newsInput: e.target.value, tempNews: { text: e.target.value} });

    };

    handleNewPost = () => {
        this.setState(() => { return { news: [...this.state.news, this.state.tempNews], newsInput: '', tempNews: { text: '' }}});
    };

    render () {
        const { newsInput } = this.state;
        const { news } = this.state;

        return (
            <div className = 'App'>
                <input value = { newsInput }
                onChange = { this.handleChange }
                className = 'todo-input'
                placeholder = 'Какие новости?'/>
                <button onClick = { this.handleNewPost }
                        className = 'button'>Create news</button>
                    <div className = 'todo-container'>
                        {news.map((post, idx) =>
                        <NewsPost key = { idx } text = { post.text }/>
                        )}
                    </div>
            </div>
        );
    }
}
