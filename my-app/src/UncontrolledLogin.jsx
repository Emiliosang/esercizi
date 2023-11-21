import React from "react";

function UncontrolledLogin() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const session = event.target.elements.namedItem('session').checked

        const data = {
            username,
            password,
            session,
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