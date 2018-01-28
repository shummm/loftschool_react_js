import React from 'react';
import NewsPost from './NewsPost';
import './App.css';

export default class App extends React.Component {
    state = {
        newsInput: '',
        news:[]
    };

    handleChange = e => {
        this.setState({ newsInput: e.target.value });
    };

    handleNewPost = () => {
        this.setState(() => { return { news: [...this.state.news, this.state.newsInput], newsInput: ''} });
    };

    render () {
        const { newsInput } = this.state;
        const { news } = this.state;

        return (
            <div className = 'App'>
                <input value = {newsInput}
                onChange = { this.handleChange }
                className = 'todo-input'
                placeholder = 'Какие новости?'/>
                <button onClick = { this.handleNewPost }
                        className = 'button'>Create news</button>
                    <div className = 'todo-container'>
                        <NewsPost>
                            { news }
                        </NewsPost>
                    </div>
            </div>
        );
    }
}
