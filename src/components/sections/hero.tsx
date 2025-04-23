"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Button } from "@/components/ui/button";
import {
  IconCar,
  IconCheck,
  IconShieldLock,
  IconThumbUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-8 md:py-16 bg-background overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        {/* Version mobile - Structure simplifiée et verticale */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Titre et texte */}
          <div className="text-center pt-4">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary">YouVTC</span>
            </h1>
            <div className="my-4">
              <VelocityScroll
                defaultVelocity={2}
                numRows={1}
                className="text-2xl"
              >
                🚗 Bienvenue à bord de YouVTC Installez-vous confortablement,
                détendez-vous… et laissez-moi vous conduire en toute sérénité.
              </VelocityScroll>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                size="lg"
              >
                <Link href="/#contact">Réserver maintenant</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/#dashcam">En savoir plus</Link>
              </Button>
            </div>
          </div>

          {/* Photo et voiture */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[120px] w-[160px]">
              <Image
                src="/images/hero-image.jpg"
                alt="Ma voiture VTC"
                width={160}
                height={120}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="relative h-40 w-40">
              <Image
                src="/images/profile.jpg"
                alt="YouVTC Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Features simplifiées */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-background/80 p-2 rounded-md border border-border">
              <IconCheck className="text-primary h-5 w-5" />
              <span className="text-sm">Disponible 7j/7</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 p-2 rounded-md border border-border">
              <IconShieldLock className="text-accent h-5 w-5" />
              <span className="text-sm">Sécurité vidéo</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 p-2 rounded-md border border-border">
              <IconCar className="text-primary h-5 w-5" />
              <span className="text-sm">Véhicule récent</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 p-2 rounded-md border border-border">
              <IconThumbUp className="text-accent h-5 w-5" />
              <span className="text-sm">Service premium</span>
            </div>
          </div>
        </div>

        {/* Version desktop - Disposition horizontale */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center">
          {/* Partie gauche - Texte et boutons */}
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-primary">YouVTC</span>
              </h1>

              <div className="mt-4">
                <VelocityScroll
                  defaultVelocity={3}
                  numRows={1}
                  className="text-3xl"
                >
                  vos trajets en toute tranquillité
                </VelocityScroll>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Link href="/#contact">Réserver maintenant</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/#dashcam">En savoir plus</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <IconCheck className="text-primary h-5 w-5" />
                <span>Disponible 7j/7</span>
              </div>
              <div className="flex items-center gap-2">
                <IconShieldLock className="text-accent h-5 w-5" />
                <span>Sécurité vidéo</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCar className="text-primary h-5 w-5" />
                <span>Véhicule récent</span>
              </div>
              <div className="flex items-center gap-2">
                <IconThumbUp className="text-accent h-5 w-5" />
                <span>Service premium</span>
              </div>
            </div>
          </div>

          {/* Partie droite - Photo et voiture */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8">
              <div className="h-[250px] w-[300px]">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Ma voiture VTC"
                  width={300}
                  height={250}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="relative h-48 w-48">
                    <Image
                      src="/images/profile.jpg"
                      alt="Younes Ouasmi"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1">Younes Ouasmi</h3>
                <p className="text-muted-foreground">
                  Votre chauffeur VTC professionnel
                </p>

                <div className="mt-6 px-4 py-2 rounded-full bg-primary/10 inline-block">
                  <span className="text-sm font-medium">
                    Sécurité embarquée
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
