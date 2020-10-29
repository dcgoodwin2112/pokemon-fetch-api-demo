import { useState, useEffect } from "react";

function Pokemon() {
  const defaultValue = window.localStorage.getItem("name") ?? "pikachu";
  const [name, setName] = useState(defaultValue);
  const [data, setData] = useState(null);

  useEffect(() => {
    window
      .fetch(` https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
    window.localStorage.setItem("name", event.target.value);
  }

  return (
    <div style={{
      border: "3px solid blue",
      borderRadius: "2rem",
      padding: "2rem",
      textAlign: "center",

    }}>
      {data ? (
        <img src={data.sprites.front_default} alt={data.name} />
      ) : (
        <p>Loading...</p>
      )}
      <form>
        <select onChange={handleChange} defaultValue={name}>
          <PokeOption name="pikachu" />
          <PokeOption name="bulbasaur" />
          <PokeOption name="squirtle" />
        </select>
      </form>
    </div>
  );
}

function PokeOption({ name }) {
  return <option value={name}>{name}</option>;
}

export default Pokemon;
