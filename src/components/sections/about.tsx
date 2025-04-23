"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      {/* Fond décoratif */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              À propos de <span className="text-primary">moi</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Chauffeur VTC passionné et développeur web à vos services
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center md:items-end"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur-sm"></div>
                <Avatar className="h-48 w-48 border-4 border-background">
                  <AvatarImage src="/images/profile.jpg" alt="Younes Ouasmi" />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-primary/80 to-accent/80 text-background">
                    YO
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="mb-2 text-2xl font-bold">Younes Ouasmi</h3>
              <p className="mb-4 text-center text-muted-foreground md:text-right">
                Chauffeur VTC & Développeur Web
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/younesouasmi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/in/younesouasmi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://younesouasmi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconCode className="h-5 w-5" />
                    <span className="sr-only">Portfolio</span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-4 text-xl font-bold">Mon parcours</h4>
                  <p className="mb-4 text-muted-foreground">
                    Passionné par le service client et la technologie, j&apos;ai
                    développé une double expertise en tant que chauffeur VTC et
                    développeur web. Cette combinaison unique me permet
                    d&apos;offrir un service de transport de qualité tout en
                    créant des solutions numériques innovantes.
                  </p>
                  <h4 className="mb-2 text-lg font-semibold">
                    Mes compétences
                  </h4>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      App Mobile
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Web app
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Application Métier
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Projet Personnel ou Pro
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Freelance
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      A l&apos;écoute du client
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Accessible
                    </span>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link
                        href="https://younesouasmi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir mon portfolio
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
