import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = { title: "Stories from Aarhus" };

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
