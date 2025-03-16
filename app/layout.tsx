import "@/styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div >
            <main >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
