import Icon from "../../assets/images/user_icon.png"
export const UserIcon = () => {
    return (
        <div className=' flex flex-col justify-center items-center pt-4 pb-2'> 
          <img src={Icon} className="h-20 w-20" alt="Ícone de usuário"/>
        </div>
    )
}