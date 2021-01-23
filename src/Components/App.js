import React from 'react';
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote , setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);

            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex]);
        }
        fetchData();
    }, []);

    const getQuote = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);

        var randomColor = require('randomcolor'); 
        var color = randomColor();
         
        setColor(color);
    }
    
    const bg = { 
        backgroundColor: color,
        minHeight: '100vh'
    }

        return (
            <div>
                <Helmet>
                <style>{'body { background-color: red; }'}</style>
                </Helmet> 
                <div>
                <Card style={{marginRight: '6rem', marginLeft: '6rem' , marginTop: '6rem'}}>
                    <Card.Header style={ {textAlign: 'center', fontSize: '2em' }}>Inspirational Quote!</Card.Header>   
                    <Card.Body>
                    <blockquote className="blockquote mb-0">
                    {randomQuote ?   
                        <>
                        <p>{randomQuote.text}</p>
                        </>
                    : <h2>Loading</h2>}
                    </blockquote>
                    <footer className="blockquote-footer" style={{fontSize: '1.5em', marginTop: '5%'}}>
                    {randomQuote.author}
                    </footer>
                    
                   <div className="mix">
                        <div className="left">
                                <Button className="btn" variant="success" onClick={getQuote}>
                                    New Quote
                                </Button>
                        </div>
                        <div  className="twitter">
                            <a href="https://twitter.com/">
                            <FaTwitterSquare size={46}/>
                            </a>

                            <a href="https://www.instagram.com/">
                            <FaInstagramSquare size={46} />
                            </a>
                        </div>
                   </div>
            
                   </Card.Body> 
                </Card> 
                </div>
            </div>
            
        )
           
}


 
export default App;