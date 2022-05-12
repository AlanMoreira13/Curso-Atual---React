
const UserDetails = ({nome, idade, profissão}) => {
    
    return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissão}</p>
        {idade >= 18 ? (
            <div>
                <h3>Pode fazer a CNH</h3>
            </div>
        ) : (
            <div>
                <h4>Não pode fazer a CNH</h4>
            </div>)} 
    </div>
  )
}

export default UserDetails