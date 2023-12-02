import useGithubUser from "./useGithubUser"

function GithubUser({username}) {
    const { data, handleUsername } = useGithubUser(username)
    
    return (
        <>
            <form onSubmit={handleUsername}>
                <input type="text" name="username" />
                <button type="submit" >Fetch</button>
            </form>
            {data && <h1>Username: {data.items[0].login}</h1>}
            {data && <h2>ID: {data.items[0].id}</h2>}
            {data && <img srcSet={data.items[0].avatar_url}></img>}
        </>
    )
}

export default GithubUser