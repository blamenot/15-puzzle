import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="tiles">
                    <div className="tile" style={{left:0, top:0}}><span>1</span></div>
                    <div className="tile" style={{left:'25%', top:0}}><span>2</span></div>
                    <div className="tile" style={{left:'50%', top:0}}><span>3</span></div>
                    <div className="tile" style={{left:'75%', top:0}}><span>4</span></div>
                    <div className="tile" style={{left:0, top:'25%'}}><span>5</span></div>
                    <div className="tile" style={{left:'25%', top:'25%'}}><span>6</span></div>
                    <div className="tile" style={{left:'50%', top:'25%'}}><span>7</span></div>
                    <div className="tile" style={{left:'75%', top:'25%'}}><span>8</span></div>
                    <div className="tile" style={{left:0, top:'50%'}}><span>9</span></div>
                    <div className="tile" style={{left:'25%', top:'50%'}}><span>10</span></div>
                    <div className="tile" style={{left:'50%', top:'50%'}}><span>11</span></div>
                    <div className="tile" style={{left:'75%', top:'50%'}}><span>12</span></div>
                    <div className="tile" style={{left:0, top:'75%'}}><span>13</span></div>
                    <div className="tile" style={{left:'25%', top:'75%'}}><span>14</span></div>
                    <div className="tile" style={{left:'50%', top:'75%'}}><span>15</span></div>
                </div>
            </div>
        );
    }
}

export default App;