export const metadata = {
  title: "CariStay",
  description: "Find your stay. Compare before you book.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}