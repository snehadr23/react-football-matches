import React, { Component } from 'react';
import './App.css';
import Year from './years/year';
import Match from './matches/match';
import axios from 'axios';
  class App extends Component {
    state = {
      yearsList : [2011, 2012, 2013, 2014, 2015, 2016, 2017],
      showMatches : false,
      matches: []
    }
  clickYearHandler = (year) => {
    axios.get('https://jsonmock.hackerrank.com/api/football_competitions?year=' + year)
    .then(res => {
      this.setState({
        matches: res.data.data,
        showMatches: true
      })
    });
  }

  render() {
  let years = null;
  let matches = null;

  years = (
    <div className = 'year-pane'>
      {this.state.yearsList.map((year, index) => {
        return <Year
            year = {year}
            click = {() => this.clickYearHandler(year)} 
            key = {year}/>
      })}
    </div>
  )

  if(this.state.showMatches) {
    if (this.state.matches.length <= 0) {
      matches  = <p>No results found!</p>;
    }
    else {
    matches = (
      <div className = 'matches-pane'>
        <h2>Total Matches: {this.state.matches.length}</h2>
        {this.state.matches.map((match, index) => {
          return <Match 
                  name = {match.name} 
                  winner = {match.winner}
                  key = {match.winner}/>
        })}
      </div>
    )
      }
  }

  return (
    <div className = 'App'>
      <h1>Football Matches</h1>
      {years}
      {matches}
    </div>
  );
  }
}

export default App;
