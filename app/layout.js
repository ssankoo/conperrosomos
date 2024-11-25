import "./globals.css";


export const metadata = {
  title: "Con Perro Somos",
  description: "Landing page for ConPerroSomos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
