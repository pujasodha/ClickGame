import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Jumbo from "./components/Jumbo";
import Wrapper from "./components/Wrapper";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import covers from "./covers.json";
import "./App.css";




//function to shuffle the array of all the covers
//ref https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffleCovers(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
  // console.log(array)
};

class App extends Component {
  // Set this.state
  state = {
    covers,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };


  //whenever a new image is clicked 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
      // console.log("clicked")
    } else {
      //reset score if same pic is clicked
      this.handleReset();
      // console.log('album picked already!')
    }
  };


  //current score increments up when clicked
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Current Score | Top Score",
      // currentScore: 'Current Score'
    });
    // console.log('plus 1!')
    

    //to change top score when current score is beat 
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  //reset when same album cover is clicked
  handleReset = () => {
    //set state when lost  
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Oh No!",
      clicked: []
    });
    this.handleShuffle();
  };


  //shuffle covers 
  handleShuffle = () => {
    let shuffledCovers = shuffleCovers(covers);
    this.setState({ covers: shuffledCovers });
  };


  //return all the html stuff
  render() {
    return (
      <Wrapper>
        <Jumbo
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

 

        <Container>
          <Row>
            {this.state.covers.map(cover => (
              <Column size="md-3 sm-6">
                <AlbumCard
                  key={cover.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={cover.id}
                  image={cover.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;



