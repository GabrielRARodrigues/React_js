import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <ul>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/images/fb.png" alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/images/tw.png" alt="Ícone do Twitter" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/ig.png" alt="Ícone do Instagram" />
          </a>
        </li>
      </ul>
      <img src="/images/logo.png" alt="Logo da Organo" />
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Rodape
