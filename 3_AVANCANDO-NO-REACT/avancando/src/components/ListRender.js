import {useState} from 'react'

function ListRender() {
    
    const [list] = useState(["Matheus", "João", "Josué", "Bento", "Maria"])
    const [users, setUsers] = useState([
        {id: 1, name: "Alan", age: 29},
        {id: 2, name: "Brenda", age: 28},
        {id: 3, name: "Rosane", age: 45}
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender