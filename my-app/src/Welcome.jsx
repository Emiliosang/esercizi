import Age from './Age';

export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        <strong>{name}</strong>, welcome!
      </p>
      <p>
        <Age age={age} />
      </p>
    </div>
  );
}  