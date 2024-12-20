export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  }
  
  import './style.css'
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className="flex flex-col min-h-screen">
        
            <div className="flex items-center justify-center fixed top-0 left-1/2 p-4 transform -translate-x-1/2 z-40 w-full bg-white bg-opacity-60">
            </div>
    
            <div className="flex flex-col items-center justify-center w-full pt-20 sm:pt-24 flex-grow p-4">
            {children}
            </div>
    
            <footer className="mt-auto w-full">
            </footer>
        
            </body>
        </html>
    )
  }