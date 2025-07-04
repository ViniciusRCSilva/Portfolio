import { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Bem-vindo ao meu portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0F0F17] text-white relative overflow-hidden">
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_2px,transparent_2px)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-grain">
            <div className="fixed inset-0 bg-[url('/noise.png')] bg-repeat"></div>
          </div>
        </div>

        {/* Main content */}
        <main className="pt-16 relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex space-x-6">
                <a href="https://github.com/ViniciusRCSilva" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/vinicius-rc-silva/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Vinicius Rodrigues. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
