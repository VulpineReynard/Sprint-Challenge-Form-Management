import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <h4>Ingredients</h4>
      {user.ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
    </div>
  );
}

export default UserCard;