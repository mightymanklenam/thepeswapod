import Footer from "../(landing)/components/footer";
import { Header } from "../(landing)/components/header";

export default function EpisodesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}