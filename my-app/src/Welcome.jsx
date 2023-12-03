import React from 'react'

export default function Welcome({ name = "Guest" }) {
    return (
      <p>Welcome, {name}!</p>
    );
  }  