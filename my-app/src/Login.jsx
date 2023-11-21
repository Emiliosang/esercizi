function Login() {
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

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <label htmlFor="session">Remember me</label>
            <button disabled={!data.username || !data.password} >Log in</button>
        </div>
    )
}

export default Login