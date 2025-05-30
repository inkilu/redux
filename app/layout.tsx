import "@/styles/globals.css";
import { Providers } from "./providers";
import { fontSans, fontMono } from "../config/fonts"; // ⬅️ import the fonts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`} // ⬅️ inject font variables
    >
      <head />
      <body className="font-sans"> {/* ⬅️ apply the font */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="w-full">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
