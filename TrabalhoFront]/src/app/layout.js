/* import localFont from "next/font/local"; */
import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "ANNE",
  description: "Aplicação de Front-End II",
  charset: 'UTF-8',
  author: 'Anne',
  keywords: "HTML, CSS, JavaScript, React, Next.js, anne"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
