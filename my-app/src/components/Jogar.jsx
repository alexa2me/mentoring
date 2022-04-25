import jogar from "../style/jogar.css"

const Jogar = (props) => {
    return (
      <div className="card">
        <div>
          <p>{props.texto}</p>
          <img src={props.imagem} alt="Mario e o Yoshi" className="imagem_principal" />
        </div>
        <section className="card_icone">
          <img src={props.heart} alt="curtida - coração" className="icone"/>
          <img src={props.chat} alt="chat - balão" className="icone"/>
          <img src={props.send} alt="enviar - aviãozinho" className="icone" />
          
        <div><img src={props.save} alt="salvar" className="icone"/></div>
        
        </section>
      </div>
    );
  };
  
  export default Jogar;
  