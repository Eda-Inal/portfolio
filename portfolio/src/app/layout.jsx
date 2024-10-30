import "./globals.css";
import SideBar from "./sidebar/page";
import Footer from "./components/footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row min-h-screen">
        <SideBar />
        <div className="flex flex-col flex-grow w-full">
        <div className="flex-grow w-full p-4 overflow-y-auto">
          {children}
        </div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
