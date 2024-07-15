import './ListaSuspensa.css'

interface ListaSuspensaProps {
  label: string
  valor: string
  aoAlterado: (valor: string) => void
  obrigatorio: boolean
  itens: string[]
}

const ListaSuspensa = ({
  label,
  valor,
  aoAlterado,
  obrigatorio,
  itens
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
        required={obrigatorio}
      >
        <option value=""></option>
        {itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default ListaSuspensa
