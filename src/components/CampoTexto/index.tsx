import { ChangeEvent } from 'react'

import './CampoTexto.css'

interface CampoTextoProps {
  aoAlterado: (value: string) => void
  label: string
  valor: string
  obrigatorio?: boolean
  placeholder: string
}

const CampoTexto = ({
  aoAlterado,
  label,
  valor,
  placeholder,
  obrigatorio = false
}: CampoTextoProps) => {
  const aoDigitado = (evento: ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoTexto
