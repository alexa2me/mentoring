import logo from './logo.svg';
import './App.css';
import Cozinhar from './components/Cozinhar';
import Jogar from './components/Jogar';

import Comida from './components/Comida';
import iconeLike from './assets/icons/heart.png'
import iconeSend from './assets/icons/send.png'
import iconeSave from './assets/icons/save.png'
import Cachoeira from './components/Cachoeira';

function App() {
  return (
    <div>
      <Jogar 
        perfil="https://avatars.githubusercontent.com/u/91093762?s=96&v=4"
        secao="Gamerverso"
        texto="Com a alta dos combustiveis gamers analisam substituir veiculos por Yoshi." 
        imagem="https://www.rockandpop.cl/wp-content/uploads/2017/09/Super-Mario-World-768x576.jpg"
        heart={iconeLike}
        send={iconeSend}
        save={iconeSave}
        chat="https://cdn-icons-png.flaticon.com/512/589/589671.png"
      />
    
      <Cozinhar titulo="Cozinhar" />
      <Comida 
      fotoPerfil = "https://avatars.githubusercontent.com/u/72248716?s=400&u=5f83653a02405f3b5cfd5c22044ede97a0a9b44b&v=4"
      titulo="Franguinho hmm" 
      imagem = "https://media.discordapp.net/attachments/925588754696110121/966023382158180433/IMG_20220419_141144.jpg?width=1025&height=461" 
      iconeLike = {iconeLike}
      iconeSend = {iconeSend}
      iconeSave = {iconeSave} 
      iconeChat = "https://cdn-icons-png.flaticon.com/512/589/589671.png"
      />
      <Cachoeira 
      fotoPerfil = "https://avatars.githubusercontent.com/u/98324557?s=400&u=914586c4473518042b43764179d9ef6eb3f1e776&v=4"
      titulo="Cachoeira para se conectar" 
      iconeLike = {iconeLike}
      iconeSend = {iconeSend}
      iconeSave = {iconeSave} 
      iconeChat = "https://cdn-icons-png.flaticon.com/512/589/589671.png"
      />
    </div>
  );
}

export default App;
