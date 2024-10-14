import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "The Wild Oasis | %s",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>© Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
