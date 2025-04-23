import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title:
    "YouVTC - Service de transport de qualité avec dashcam Vantrue Nexus 5",
  description:
    "Service de VTC professionnel avec dashcam Vantrue Nexus 5 pour votre sécurité et confort. Découvrez également mes services de développement web.",
  keywords: [
    "VTC",
    "dashcam",
    "Vantrue Nexus 5",
    "développeur web",
    "transport",
    "Younes Ouasmi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
