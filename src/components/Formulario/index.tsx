import { FormEvent, useState } from 'react'

import './Formulario.css'

import { IColaborador } from '../../shared/interfaces/IColaborador'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

interface FormularioProps {
  aoColaboradorCadastrado: (colaborado: IColaborador) => void
  times: string[]
}

const Formulario = ({ aoColaboradorCadastrado, times }: FormularioProps) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [data, setData] = useState('')

  const aoSalvar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data
    })

    setNome('')
    setImagem('')
    setTime('')
    setCargo('')
    setData('')
  }

  return (
    <section className="formulario">
      <form onSubmit={evento => aoSalvar(evento)}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Data de entrada no time"
          placeholder=""
          valor={data}
          tipo="date"
          aoAlterado={valor => setData(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
