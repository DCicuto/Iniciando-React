import { useState } from "react";
import { Tweet } from "./componentes/Tweet";
import './App.css';

function App() {
  // o setTweets é uma função que atualiza o estado de tweets
  const [tweets, setTweets] = useState<string[]>([ 
    'Tweet: 1',
    'Tweet: 2',
    'Tweet: 3',
    'Tweet: 4',
  ]);

  function createTweet() {
    setTweets([...tweets, `Tweet: ${tweets.length + 1}`]);
  }

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} key={tweet} />;  // Renderiza um Tweet para cada item do array tweets
      })}

      <button onClick={createTweet}
        style={{
          backgroundColor: '#coral',
          color: 'white',
          padding: 10,
          borderRadius: 5,
          border: 'none',
          cursor: 'pointer',
          marginTop: 10
        }}>
        adicionar Tweet
      </button>
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros arquivos