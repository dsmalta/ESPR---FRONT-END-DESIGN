function Sobre(){
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-green-600 mb-6">
                Sobre Nós
            </h1>
            <div className="max-w-2xl">
                <p className="text-lg text-gray-700 mb-4">
                    Este é um projeto simples para demonstrar o uso do React Router.
                </p>
                <p className="text-gray-600 mb-6">
                    Aqui você terá navegação simples entre páginas sem recarregar a página.
                </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                    Tecnologias Usadas:
                </h2>
                <ul className="space-y-2 text-green-700">
                    <li>React 18</li>
                    <li>Vite</li>
                    <li>React Route</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
        </div>
    );
}

export default Sobre;