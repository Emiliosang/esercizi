import Age from './Age';

export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        <strong>{name}</strong>, welcome!
      </p>
        {age && <Age age={age} />}
        {age > 18 && <Age age={age} />}
        {(age > 18 && age < 65) && <Age age={age} />}
        {(age > 18 && age < 65) && <Age age={age} />}
    </div>
  );
}  