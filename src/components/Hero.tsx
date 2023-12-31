export function Hero (){

    return (
    
        <>
         <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-white-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Guilherme
              </span>
              <span className="font-headline text-5xl font-light text-orange-400">
                Luz Conci
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-gray-800" />
              Desenvolvedor React.js Front-end
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
              Sou um desenvolvedor front-end que ama criar coisas para a web;
               sites e aplicações web.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#contact"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <button><a
                href="EED.pdf"
                download="EED.pdf"
                target="_blank"
                className="button flex items-center gap-2 text-orange-600 hover:text-gray-900"
              >
                
                Baixe meu CV
              </a></button>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-gray-700 to-black-600 md:w-1/3" />
        </>
    )
    
    
    }