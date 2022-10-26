import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape2">
      <div className="logos">
        <a href="https://www.linkedin.com/in/lucasgomesgoulart/" target="_blank">
            <img src="imagens/linkedin.png" alt="Linkedin"/>
        </a>
        <a href="https://github.com/lucasgomesgoulart" target="_blank">
            <img src="imagens/git.png" alt="Instagram" />
        </a>
      </div>

      <img src="imagens/logo.png" alt="Organo" style={{width: 120}}/>
      <p>Desenvolvido por <a href="https://lucasgomesgoulart.github.io/portfolio/" target="_blank">Lucas Goulart</a></p>
    </footer>
  );
};

export default Rodape;