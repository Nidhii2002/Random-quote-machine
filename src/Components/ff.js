<div className="card">

                   <div className="quote">
                        {randomQuote ?   
                        <>
                        <p>{randomQuote.text}</p>
                        <h3>- {randomQuote.author}</h3>
                        </>
                    : <h2>Loading</h2>}
                   </div>
                   <div className="author">
                   </div>


                   style={{backgroundColor: color, marginTop: '0px' , minHeight: '100vh'}
                   .card {
                    margin: 5% 10% 10% 20%;
                    border: 2px solid green;
                    color: red;
                  }