import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis Website",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
