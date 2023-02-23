import Container from '@/components/Container';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="pt-[var(--navigation-height)]">{children}</main>
        <footer>
          <Container>footer</Container>
        </footer>
      </body>
    </html>
  );
}
