import { Typography, Paper } from "@mui/material";
import { Component } from "react";
import axios from "axios";
import './articles.scss';

class Articles extends Component{
    state = {
        data: null
    };

    componentDidMount() {
        this.getArticles();
    }

    getArticles = async () => {
        await axios.post('http://localhost:8000/api/articles/get', {}, {headers: {'Content-type': 'application/json'}})
        .then(response => response.data)
        .then(data => this.setState({
            data
        }));
    };
    
    
    render() {
        let content = null;
        if(this.state.data !== null) {
            content = this.state.data.map((item, i) => {
                return (
                    <Paper key={i} elevation={4} sx={{p: 2, mb: 2}}>
                    <h2 className="articles__heading">{item.heading}</h2>
                    <Typography>{item.descr}</Typography>
                    <a className="articles__link" href={item.link}>Прочитать полностью</a>
                </Paper>
                );
            })
        }

        return (
            <section className="articles">
                <div className="container">
                <Typography color={'var(--green)'} variant="h3" component="h2" textAlign="center" mt={3} mb={5}>Статьи об экологии</Typography>
                    {content}
                </div>
            </section>
        );
    }
};

export default Articles;