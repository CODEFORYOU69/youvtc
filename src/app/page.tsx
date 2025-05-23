import { BlurFade } from "@/components/magicui/blur-fade";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { DashcamSection } from "@/components/sections/dashcam";
import { HeroSection } from "@/components/sections/hero";
import { Header } from "@/components/ui/header";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <DashcamSection />
      <AboutSection />
      <ContactSection />
      <BlurFade>
        <footer className="bg-background py-8 border-t border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <Image
                      src="/images/logo.jpg"
                      alt="YouVTC Logo"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  </span>
                  <span className="ml-2 text-xl font-bold text-foreground">
                    You<span className="text-primary">VTC</span>
                  </span>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                  © {currentYear} YouVTC. Tous droits réservés.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a
                  href="/mentions-legales"
                  className="hover:text-foreground transition-colors"
                >
                  Mentions légales
                </a>
                <a
                  href="/conditions-generales"
                  className="hover:text-foreground transition-colors"
                >
                  CGU
                </a>
                <a
                  href="/confidentialite"
                  className="hover:text-foreground transition-colors"
                >
                  Confidentialité
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/younesouasmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </BlurFade>
    </main>
  );
}
