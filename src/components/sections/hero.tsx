"use client";

import { Button } from "@/components/ui/button";
import {
  IconCar,
  IconCheck,
  IconShieldLock,
  IconThumbUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              Service <span className="text-primary">VTC</span> de{" "}
              <span className="text-accent">confiance</span>
            </h1>

            <p className="text-base text-muted-foreground mb-6">
              Transport sécurisé et professionnel avec enregistrement vidéo pour
              votre tranquillité d&apos;esprit.
            </p>

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

          {/* Photo de profil avec style simplifié */}
          <div className="flex justify-center mb-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30">
              <Image
                src="/images/profile.jpg"
                alt="Younes Ouasmi"
                fill
                className="object-cover"
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
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Service <span className="text-primary">VTC</span> de{" "}
              <span className="text-accent">confiance</span>
            </h1>

            <p className="max-w-[600px] text-muted-foreground text-lg">
              Transport sécurisé et professionnel avec enregistrement vidéo pour
              votre tranquillité d&apos;esprit.
            </p>

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

          {/* Partie droite - Photo de profil */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full scale-95 opacity-70" />

              <div className="relative rounded-full border-2 border-border/50 bg-background/80 p-8 w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 relative">
                    <div className="relative h-36 w-36 rounded-full overflow-hidden border-4 border-primary/30">
                      <Image
                        src="/images/profile.jpg"
                        alt="Younes Ouasmi"
                        fill
                        className="object-cover"
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
      </div>
    </section>
  );
}
