import logo from './logo.svg';
import './App.css';
import Cozinhar from './components/Cozinhar';
import Comida from './components/Comida';
import iconeLike from './assets/icons/heart.png'
import iconeSend from './assets/icons/send.png'
import iconeSave from './assets/icons/save.png'
import iconeChat from './assets/icons/chat.png'

function App() {
  return (
    <div>
      <Cozinhar />
      <Comida 
      fotoPerfil = "https://avatars.githubusercontent.com/u/72248716?s=400&u=5f83653a02405f3b5cfd5c22044ede97a0a9b44b&v=4"
      titulo="Frango grelhado com creme de milho by Jorge" 
      imagem = "https://media.discordapp.net/attachments/925588754696110121/966023382158180433/IMG_20220419_141144.jpg?width=1025&height=461" 
      iconeLike = {iconeLike}
      iconeSend = {iconeSend}
      iconeSave = {iconeSave} 
      iconeChat = "https://cdn-icons-png.flaticon.com/512/589/589671.png"
    />
    </div>
  );
}

export default App;
