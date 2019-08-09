import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class NewUserGrid extends React.Component {
  constructor() {
    super();
  }

  
   componentDidMount() {
    axios.get('http://localhost:5000/api/restricted/data')
       .then(res => {
        console.log(res.data);
        this.props.setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }

  
  render() {
    
    return (
      <div className="user-grid">
        {this.props.users.map((user, index) => <UserCard user={user} key={index}/>)}
      </div>
    )
  }
}

export default NewUserGrid;