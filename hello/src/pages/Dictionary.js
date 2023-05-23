import { useState, useEffect} from "react";
export default function Dictionary() {
  const [word, setWord] = useState('');

  useEffect(() => {

  });
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Lets get definitno of {word}</h1>
    </>
  );
}
