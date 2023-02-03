export default function contatos(){
    return(
        <div className="z-0 flex w-full h-screen justify-center">
            
            {/* mobile section */}
            <div className="flex md:hidden flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-4xl text-[#FF6600]">PROJETOS</p>

            </div>           

            {/* desktop section */}
            <div className="hidden md:flex flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-6xl text-[#FF6600]">PROJETOS</p>

            </div>
        </div>
    )
}