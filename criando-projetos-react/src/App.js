/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState(0);
  const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]);

  const handleAddUser = () => { // função acionado ao clicar no botão 'Adicionar'
    setUsuarios([...usuarios, usuario]); // cria um array novo a partir do existente e adiciona o usuário no array
    setUsuario(""); // manda um valor vazio para usuario limpando o input ao clicarmos em 'adicionar'
  };

  useEffect(() =>{
    setCount(usuarios.length)
  }, [usuarios]) // array de dependências. Toda vez que usuários for atualizado useEffect é executado
  return (
    <div className="App">
      <h1>Hello Dio!</h1>
      <h3>Total: {count /* mostra o valor */}</h3>
      <div>
        <input
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)} // Cada vez que o valor do input for alterado, esse valor é mandado para 'usuario'.
        />
        <button onClick={handleAddUser /* Chama a função */}>Adicionar</button>
        <hr />
        {usuarios.map((item) => ( // Lista todos os usuários
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
