import "./globals.css";
import SideBar from "./sidebar/page";
import Template from "./template";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row h-screen">
        <SideBar />
        <div className="flex-grow w-full p-4 overflow-y-auto">
        <Template>{children}</Template>
        </div>
        <div id="notification-root"></div>
      </body>
    </html>
  )}
