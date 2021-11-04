import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SSH-it.dev</h1>
        <div className="main">
          <div className="intro-content">
            <p>SSH can be a bit weird, or even a litte scary. There's "keys" that we use to connect using a console (or is it a terminal, no wait its a console!). But we are connecting to another machine... Who am I on that machine? Why was I allowed (or not allowed to connect).  If you aren't familiar with networking or other protocols, SSH might feel like a bit of a black box to get started. </p>
            <br />
            <p>Here are the things that helped me understand SSH, and how to not make it shitty</p>
          </div>
          <div className="basic-terms">
            keygen, agent, pid, ip, rsa
          </div>
        </div>

        <div className="citations">
          <p>Citations</p>
          <cite>
            <a href="https://linux.die.net/man/1/ssh">https://linux.die.net/man/1/ssh </a>
          </cite>
        </div>
      </header>

      <footer>
        <p> A Site by <a href="https://github.com/BennEntterprise">Kyle</a></p>
      </footer>
    </div>
  );
}

export default App;
