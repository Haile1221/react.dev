function Greeting({ name, age }) {
  return (
    <div>
      <h1>
        Hello, {name}, {age}
      </h1>
      <p> React Js is amaising Course </p>
    </div>
  );
}

export default function App() {
  return <Greeting name="world" age=" 20" />;
}
