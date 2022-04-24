import cozinhar from "../assets/cozinhar.jpeg";
import heart from "../assets/icons/heart.png";
import chat from "../assets/icons/chat.png";
import send from "../assets/icons/send.png";
import save from "../assets/icons/save-instagram.png";
import "../style/cozinhar.css";

const Cozinhar = (props) => {
  return (
    <div className="container">
      <div>
        <p>{props.titulo}</p>
        <img src={cozinhar} alt="Prato de salada" className="img-principal" />
        <div className="container-icons">
          <div className="three-icons">
            <img src={heart} alt="Coração-icone" />
            <img src={chat} alt="Balão-icone" />
            <img src={send} alt="Enviar-icone" />
          </div>
          <img src={save} alt="Salvar-icone" />
        </div>
      </div>
    </div>
  );
};

export default Cozinhar;
