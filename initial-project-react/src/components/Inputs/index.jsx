export const Inputs = () => {
    return(
        <div className="">
         <form className="mt-4 mb-4" action="SucessLogin.jsx">
                <label className="flex gap-x-2 text-center font-bold">Email:<input type="email" placeholder="seuemail@email.com" className="block w-full px-4 py-2 mt-3 gap-3 text-purple-700 bg-white border-2 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required/> </label>
                <label className="flex gap-x-2 gap-y-6 text-center font-bold">Senha:<input type="password" placeholder="********" className="block w-full px-4 py-2 mt-3 text-purple-700 bg-white border-2 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" maxLength={8} required /></label>
            </form>
        </div>
    )
}

