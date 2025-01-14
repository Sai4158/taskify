import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Taskify App",
  description: "Manage your tasks with ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-black`}
      >
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
        </div>
        <div className="mt-8">{children}</div>
        {/* Footer Section */}
        <footer className="bg-gray-800 text-center py-4 mt-12">
          <p className="text-gray-400">
            <a
              href="https://github.com/Sai4158"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Sai4158
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
