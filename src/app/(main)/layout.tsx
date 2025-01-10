import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-bgcolor text-textcolor">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
