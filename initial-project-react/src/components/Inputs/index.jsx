const Inputs = () => {
    return(
        <div className="flex-col justify-center items-center">
            <form className="mt-6">
                <label> Email: <input type="email" placeholder="Username" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/> </label>
                <label> Senha: <input type="password" placeholder="********" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" /></label>
            </form>
        </div>
    )
}