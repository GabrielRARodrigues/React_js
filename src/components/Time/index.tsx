import './Time.css'

import { IColaborador } from '../../shared/interfaces/IColaborador'
import Colaborador from '../Colaborador'

interface TimeProps {
  corSecundaria: string
  colaboradores: IColaborador[]
  corPrimaria: string
  nome: string
}

const Time = ({
  corSecundaria,
  colaboradores,
  corPrimaria,
  nome
}: TimeProps) => {
  const css = {
    backgroundColor: corSecundaria
  }

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map(colaborador => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria={corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}

export default Time
