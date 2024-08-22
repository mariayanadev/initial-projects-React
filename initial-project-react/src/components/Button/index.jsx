export const Button = () => {
    return(
    <div> 
        <button type="submit" className="bg-blue-700 text-white rounded-2xl px-36 py-4 font-bold"> 
        Entrar 
        </button> 
        <p className="pt-4 italic">  
            Esqueceu sua senha? 
        <a href="passwordForget.index.jsx" className="text-base text-rose-600 font-bold not-italic"> 
            Clique aqui   
        </a>
        </p>
        
    </div>
    )
}