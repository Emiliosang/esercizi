import { useState } from "react"

function Login({ onLogin }) {
    const [data, setData] = useState({
        username: '',
        password: '',
        session: false,
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
            ...d,
            [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleLoginClick() {
        onLogin(data);
      }

    function handleResetClick() {
        setData({
          username: "",
          password: "",
          session: false,
        });
      }

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <label htmlFor="session">Remember me</label>
            <button disabled={!data.username || !data.password} onClick={handleLoginClick}>Log in</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}

export default Login