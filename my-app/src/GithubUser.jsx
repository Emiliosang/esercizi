import useGithubUser from "./useGithubUser";
export default function GithubUser() {
  const { data, setUsername, refetch } = useGithubUser();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUsername(e.target.username.value);
        }}
      >
        <input type="text" name="username" placeholder="Enter username" />
        <button type="submit">Fetch</button>
      </form>
      {data && (
        <>
          <h1>Username: {data.items[0].login}</h1>
          <h2>ID: {data.items[0].id}</h2>
          <img src={data.items[0].avatar_url} alt="GitHub Avatar" />
        </>
      )}
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
}