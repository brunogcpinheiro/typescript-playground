import React, { useState } from "react";

interface User {
  name: string;
  avatar_url: string;
  followers: number;
  location: string;
  bio: string;
  public_repos: number;
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
    if (inputValue) {
      fetchData(inputValue);
    } else {
      alert("Por favor, insira um usuário...");
    }
    setInputValue("");
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "1.2rem"
      }}
    >
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
          <h1>Esté é {user?.name}</h1>
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto"
            }}
          >
            <img
              src={user?.avatar_url}
              alt={user?.name}
              style={{
                width: "170px",
                borderRadius: "50%",
                border: "2px dashed black"
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.2rem",
                padding: "0 10px"
              }}
            >
              <p>{user?.bio}</p>
              <small>
                {user.location
                  ? `Mora em ${user?.location}`
                  : "Não definiu localidade"}
              </small>
              <small>
                Possui <strong>{user?.followers}</strong> seguidores!
              </small>
              <small>
                Possui <strong>{user?.public_repos}</strong> repositórios!
              </small>
            </div>
          </div>
        </div>
      ) : (
        <p>Digite um usuário para aparecer as informações</p>
      )}
    </div>
  );
};

export default App;
