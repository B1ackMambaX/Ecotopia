import { Component } from "react";
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Container, Box, TextField, Button, CssBaseline  } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import axios from "axios";

import eco from '../../resources/img/eco.jpeg';
import './events.scss';


class Events extends Component {
    state = {
        data: null,
        name: null,
        date: null,
        place: null,
        descr: null
    };

    submitHandler = async () => {
        const { user } = this.props,
              {name, date, place, descr} = this.state;
        try {
            await axios.post('http://localhost:8000/api/events/add', {
                creatorName: user.firstName,
                creatorSurname: user.lastName,
                creatorEmail: user.email,
                name,
                date,
                place,
                descr
            }, {headers: {'Content-type': 'application/json'}})
            .then(response => console.log(response))
            .then(this.onUpdateEvents());
        } catch (err) {
            console.log(err);
        }
        // this.setState(({data}) => ({
        //     data: [...data, {name: event.get('name'), date: event.get('date'), place: event.get('place'), description: event.get('descr'), img: event2}]
        // }));
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onUpdateEvents = async () => {
        try {
            await axios.post('http://localhost:8000/api/events/get', {}, {headers: {'Content-type': 'application/json'}})
            .then(response => response.data)
            .then(data => this.setState({
                data
            }));
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.onUpdateEvents();
    }

    render() {
        const { isAuthorized } = this.props;
        let isOff = false,
            msg = "Отправить";
        if(!isAuthorized) {
            isOff = true;
            msg = 'Сначала зарегистрируйтесь';
        }
        let content = null;
        if (this.state.data != null) {
            content = this.state.data.map((item, i) => {
                return (
                    <Paper key={i} elevation={4} sx={{p: 2, mb: 2}}>
                
                        <div className="events__item">
                            <img src={eco} alt="Event" className="events__img"/>
                            <div>
                                <h2 className="events__name">{item.name}</h2>
                                <div className="events__date"><span>Время проведения: </span>{item.date}</div>
                                <div className="events__place"><span>Место проведения: </span>{item.place}</div>
                            </div>
                        </div>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMore/>}
                            aria-controls={`panel${i}a-content`}
                            id={`panel${i}a-header`}
                            >
                            <Typography sx={{fontWeight: 700, color: 'var(--green)'}}>Описание</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{p: 2}}>
                                    {item.descr}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                );  
            })
        }
        return (
            
            <section className="events">
                <div className="container">
                    <Typography color={'var(--green)'} variant="h3" component="h2" textAlign="center" mb={5}>Мероприятия</Typography>

                    {content}

                    <Typography color={'var(--green)'} variant="h3" component="h2" textAlign="center" mb={5} mt={5}>Добавьте свое мероприятие</Typography>
                    <Container component="main" maxWidth="md">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
                <Box component="form" onSubmit={(e) => e.preventDefault()} noValidate sx={{ mt: 1 }}>
						<TextField onChange={this.onValueChange} margin="normal" required fullWidth id="name" label="Название мероприятия" name="name"/>
						<TextField onChange={this.onValueChange} margin="normal" required fullWidth name="date" label="Дата проведения" type="text" id="date"/>
                        <TextField onChange={this.onValueChange} margin="normal" required fullWidth name="place" label="Место проведения" type="text" id="place"/>
                        <TextField onChange={this.onValueChange} margin="normal" required fullWidth name="descr" label="Описание мероприятия" type="text" id="descr" multiline/>
						<Button onClick={this.submitHandler} disabled={isOff} color="success" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							{msg}
						</Button>
					</Box>
				</Box>
			</Container>
                    
                </div>
            </section>
        );
    }
};

export default Events;