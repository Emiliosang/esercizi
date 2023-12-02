import useGithubUser from "./useGithubUser"

export default function GithubUser(username) {
    const {data, loading, error} = useGithubUser()

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    )
}