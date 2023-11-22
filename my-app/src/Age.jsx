function Age({ age }) {
  return (
    <p>
      {age > 18 ? `your age is:${age}`: "you are very young!"}
    </p>
  );
}

export default Age