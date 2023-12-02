import React from 'react';
import useForm from './useForm';

function Form() {
  const { data, handleInputChange } = useForm();

  return (
    <>
        <form>
            <label htmlFor="username">Inserire username:  </label>
            <input type="text" name="username" value={data.username} onChange={handleInputChange} />
            <br />
            <label htmlFor="password">Inserire password:  </label>
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        </form>
        <p>Username: {data.username}</p>
        <p>Password: {data.password}</p>
    </>
  );
};

export default Form;