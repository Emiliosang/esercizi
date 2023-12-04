import Counter from "./Counter";
export default function App() {
  const handleDirectionChange = (direction) => {
    console.log("Direction changed:", direction);
  };

  return (
    <div>
      <Counter initialValue={0} onDirectionChange={handleDirectionChange} />
    </div>
  );
}