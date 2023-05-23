import { useState, useEffect } from "react";
export default function Definition() {
  const [word, setWord] = useState([]);
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  return (
    <>
      <p>here is a definition</p>
      {word.map((meaning) => {
        return <p>{meaning.definitions[0].definition}</p>;
      })}
    </>
  );
}
