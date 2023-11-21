import React from "react";

function UncontrolledLogin() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new formData(event.target)

        const data = {
            username: formData('username'),
            password: formData('password'),
            session: formData('session') === 'on' ? true : false,
        }

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="session" />
            <button>Log in </button>
        </form>
    )
}

export default UncontrolledLogin

//non ho capito bene il funzionamento di fromData