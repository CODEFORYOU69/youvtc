"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconFileInfo, IconLock, IconShieldLock } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function LegalSection() {
  return (
    <section
      id="legal"
      className="relative overflow-hidden py-16 md:py-24 bg-muted"
    >
      {/* Fond décoratif */}
      <div className="absolute -top-1/4 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Informations <span className="text-primary">légales</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Politique de confidentialité et conformité RGPD concernant
            l&apos;utilisation de la dashcam
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <IconShieldLock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    Protection des données
                  </CardTitle>
                  <CardDescription>Conformité RGPD stricte</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Toutes les données sont traitées conformément au Règlement
                    Général sur la Protection des Données (RGPD). Vos
                    informations sont strictement protégées.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <IconLock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    Conservation des images
                  </CardTitle>
                  <CardDescription>Durée limitée et sécurisée</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Les enregistrements vidéo sont conservés pour une durée
                    maximale de 30 jours, sauf en cas d&apos;incident
                    nécessitant une conservation plus longue pour des raisons
                    légales.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <IconFileInfo className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    Information des passagers
                  </CardTitle>
                  <CardDescription>Transparence et droits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Une information claire sur la présence de la dashcam est
                    affichée dans le véhicule. Vous pouvez exercer vos droits
                    d&apos;accès, de rectification et d&apos;opposition.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Politique détaillée</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="mb-1 font-semibold">Finalité du traitement</h4>
                  <p>
                    L&apos;enregistrement vidéo a pour objectif d&apos;assurer
                    la sécurité des personnes et des biens, de prévenir les
                    incidents et de fournir des preuves en cas d&apos;accident
                    ou d&apos;incident.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">Base légale</h4>
                  <p>
                    Ce traitement est fondé sur l&apos;intérêt légitime du
                    chauffeur VTC à assurer sa sécurité, celle des passagers, et
                    à protéger les biens, conformément à l&apos;article 6.1.f du
                    RGPD.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">
                    Accès aux enregistrements
                  </h4>
                  <p>
                    Seul le responsable du traitement (Younes Ouasmi) a accès
                    aux enregistrements. Ils peuvent être transmis aux autorités
                    compétentes en cas de nécessité légale.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">Exercice de vos droits</h4>
                  <p>
                    Pour toute question ou pour exercer vos droits (accès,
                    rectification, opposition, effacement), vous pouvez
                    contacter le responsable à l&apos;adresse :
                    y.ouasmi@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
