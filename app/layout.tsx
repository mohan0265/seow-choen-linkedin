import "./globals.css";

export const metadata = {
  title: "Dr. Francis Seow‑Choen | Profile Mock",
  description: "High-fidelity LinkedIn-style mock profile for Prof. Francis Seow‑Choen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}