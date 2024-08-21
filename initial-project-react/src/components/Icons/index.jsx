import Icon from "../../assets/images/user-profile.jpg"
export const UserIcon = () => {
    return (
        <div className='flex justify-center items-center w-32 h-32'> 
          <img src={Icon} className="h-2 w-2" alt="Ícone de usuário"/>
        </div>
    )
}