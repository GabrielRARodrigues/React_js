import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <ul>
        <li>
          <a href="facebook.con">
            <img src="/images/fb.png" alt="Icone do facebook" />
          </a>
        </li>
        <li>
          <a href="twitter.com">
            <img src="/images/tw.png" alt="Icone do twitter" />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <img src="/images/ig.png" alt="Icone do instagram" />
          </a>
        </li>
      </ul>
      <img src="/images/logo.png" alt="Loga da Organo" />
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Rodape
