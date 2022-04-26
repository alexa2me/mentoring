import jogar from "../style/jogar.css"

const Jogar = (props) => {
    return (
      <div className="card">
        <div className="header_jogar">
          <img src={props.perfil} alt="imagem_perfil"  className="imagem_perfil"/>
          <p className="texto_perfil">{props.secao}</p>
        </div>
        <div>
          <p className="texto">{props.texto}</p>
          <img src={props.imagem} alt="Mario e o Yoshi" className="imagem_principal" />
        </div>
        <section className="card_icones">
          <img src={props.heart} alt="curtida - coração" className="icone"/>
          <img src={props.chat} alt="chat - balão" className="icone"/>
          <img src={props.send} alt="enviar - aviãozinho" className="icone" />
          
        <span>
          <img src={props.save} alt="salvar" className="icone_salvar"/>
        </span>
        
        </section>
      </div>
    );
  };
  
  export default Jogar;
  