import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heroes from "./heroes.json";
import "./App.css";
  
  class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      heroes
      // unselectedHeroes: heroes,
      // topScore: 0,
      // curScore: 0,
    };
  

  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <Wrapper>
          <Title>Clicky-Game</Title>
          {this.state.heroes.map(hero => (
            <HeroCard
              // removeFriend={this.removeFriend}
              // id={friend.id}
              // key={friend.id}
              name={hero.name}
              image={hero.image}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
export default App;
  

