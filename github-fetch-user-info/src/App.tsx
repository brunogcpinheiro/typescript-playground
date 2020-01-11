import React, { useState } from "react";

interface User {
  name: string;
  avatar_url: string;
  followers: number;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useState<User>();

  async function fetchData(value: string) {
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();

    setUser(data);
  }

  function submit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    fetchData(inputValue);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Digite um usuário..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
      {user ? (
        <div>
          <h1>Olá, {user?.name}</h1>
          <p>Você possui {user?.followers} seguidores!</p>
          <p>E sua imagem de perfil é a seguinte:</p>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
      ) : (
        <p>Digite um usuário para aparecer as informações</p>
      )}
    </div>
  );
};

export default App;
