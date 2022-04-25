import logo from './logo.svg';
import './App.css';
import Cozinhar from './components/Cozinhar';
import Jogar from './components/Jogar';
import heart from './assets/icons/heart.png'
import chat from './assets/icons/chat.png'
import send from './assets/icons/send.png'
import save from './assets/icons/save-instagram.png'

function App() {
  return (
    <div>
      <Cozinhar />
      <Jogar 
        texto="Com a alta dos combustiveis gamers analisam substituir veiculos por Yoshi." 
        imagem="https://www.rockandpop.cl/wp-content/uploads/2017/09/Super-Mario-World-768x576.jpg"
        heart={heart}
        chat={chat}
        send={send}
        save={save}
      />
    
    </div>
  
  );
}

export default App;
