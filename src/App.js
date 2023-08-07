import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Tony Stark',
      bio: 'I am a software developer.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
      profession: 'Software Engineer',
    },
    shows: false, // Initially set to false to hide the profile
    lastMountTime: new Date(), // Store the time when the component is mounted
  };

  componentDidMount() {
    // Lifecycle method that runs after the component is mounted in the DOM
    // Sets up an interval that updates the lastMountTime state every second
    this.interval = setInterval(() => {
      this.setState({ lastMountTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Lifecycle method that runs just before the component is unmounted from the DOM
    // Clears the interval to prevent memory leaks
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    // Function to toggle the shows state between true and false
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    return (
      <div>
        {/* Button to toggle the profile visibility */}
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {/* Conditional rendering - Display the profile if shows is true */}
        {this.state.shows && (
          <div>
            {/* Display the person's profile information */}
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        {/* Display the time since the last component mount */}
        <p>Time since last mount: {Math.round((new Date() - this.state.lastMountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;

