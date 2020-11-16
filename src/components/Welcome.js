import React from 'react';
import '../App.css';
import './Welcome.css'


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: '',
      firstName: '',
      lastName: '',
      email: ''
    };
   
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.LevelChange = this.LevelChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value    });
  }

  handleSubmit(event) {
    event.preventDefault();
}

  LevelChange(event) {
    this.setState({difficulty: event.target.value});
} 

  localData = () => {
    let localValue = localStorage.getItem('firstName');
    return localValue;
}

  render() {
    return (
   
      <form id='form' className='form' onSubmit={this.handleSubmit}>
        <div className="Welcome">
          <h1>Welcome to Match-Match game</h1>

           <div className="rega">
          
              <label>
                First name
                <input id='first' className="input"  name="firstName" type='text' value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                Second name
                <input id='second' className="input" name="secondName" type='text' value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                  E-mail
                  <input id='email' className="input" name="email" type='text' value={this.state.value} onChange={this.handleChange} />
              </label>

                  <input type="submit" value="Отправить" />

            </div>
  
         
          
          <div className="level">
            <h2>Choose level</h2>
            <select className="choose-level" value={this.state.difficulty} onChange={this.LevelChange}>
                <option value='4' onChange={this.LevelChange}>Easy</option>
                <option value='6' onChange={this.LevelChange}>Medium</option>
                <option value='8' onChange={this.LevelChange}>Hard</option>
            </select>
          </div>
         
        </div>

      </form>
      
    );
  }
}


export default Welcome;