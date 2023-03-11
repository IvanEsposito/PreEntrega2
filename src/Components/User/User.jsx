import UserPres from "./UserPres"
const User = () => {
    let nombre ="pepito";
    let apellido = "perez";
  return (
    <div>
        <UserPres nombre={nombre} apellido={apellido}/>
    </div>
  )
}

export default User