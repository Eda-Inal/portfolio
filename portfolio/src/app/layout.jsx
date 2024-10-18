import "./globals.css";
import SideBar from "./sidebar/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
