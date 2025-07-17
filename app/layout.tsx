import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import clsx from "clsx"

import { Providers } from "./providers"

import { fontSans, fontHeading, fontDisplay } from "@/config/fonts"

export const metadata: Metadata = {
  title: {
    default: "ImageKit Transformation",
    template: `%s - ImageKit Transformation`,
  },
  description:
    "Téléchargez, transformez et optimisez vos images grâce à des outils alimentés par l’IA. Redimensionnez, recadrez, supprimez les arrière-plans et bien plus encore avec des transformations basées sur des URL.",
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontDisplay.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className='relative flex flex-col min-h-screen'>
            <main className='flex-grow'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
