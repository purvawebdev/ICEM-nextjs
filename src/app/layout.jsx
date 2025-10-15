import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedActionBar from "@/components/FixedActionBar";

export const metadata = {
  title: "ICEM - Indira College of Engineering and Management",
  description: "Official ICEM website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <FixedActionBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
