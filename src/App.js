import React from 'react';
import NewsPost from './newsPost';
import './App.css';

export default class App extends React.Component {
    fields = [];
    state = {
        value: '',
        postNews: this.fields
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }
    
    handleClick = e => {
        this.fields.push(this.state.value);
        this.setState({postNews: this.fields});
        this.setState({value: ''});
    }
    render () {
        const {value} = this.state;
        const {postNews} = this.state;
        
        return (
            <div className = 'App'>
                <input value = {value} 
                onChange = {this.handleChange} 
                className = 'todo-input'
                placeholder = 'Какие новости?'/>
                <button onClick = {this.handleClick} className = 'button'>Create news</button>
                    <div className = 'todo-container'>
                    {postNews.map((post, idx) =>
                        <NewsPost key = {idx}>
                            {post}
                        </NewsPost>
                    )}
                    </div>
            </div>
        );
    }
}
