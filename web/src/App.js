import React, { useEffect, useState}from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Componente: bloco isolado, html, css js que nao interfere nos outros
//Estado: informacoes mantidas pelo componente(lembrar : imutabilidade)
//Proprieade: Informacao que um componente pai passa para o filho


function App() {

  const[devs, setDevs] = useState([]);

  useEffect(( ) => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);

    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data)

    console.log(data);

    

    setDevs([...devs, response.data])

 }
  

  return (
    <div id="app">
      <aside>

        <strong> Cadastrar </strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>

        <main>
          <ul>
            {devs.map(dev =>(
              <DevItem key={dev._id} dev={dev}/>

            ))}
 
          </ul>


        </main>


    </div>
  );

}

export default App;
