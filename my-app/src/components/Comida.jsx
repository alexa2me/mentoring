import "../style/comida.css";

const Comida = (props) => {
  return (
    <div className="container">
      <div className="card-comida">
        <div className="card-header">
            <img className="card-perfil" src={props.fotoPerfil} alt="foto de perfil" />
            <p>{props.titulo}</p>
        </div>
        <img className="card-imagem" src={props.imagem} alt={props.alt} />
        <div className="icones">
          <img className="card-icone" src={props.iconeLike} />
          <img className="card-icone" src={props.iconeChat} />
          <img className="card-icone" src={props.iconeSend} />
          <span>
            <img className="card-icone direita" src={props.iconeSave} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comida;
