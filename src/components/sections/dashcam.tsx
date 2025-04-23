"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  IconAd,
  IconAlertCircle,
  IconCamera,
  IconFileInfo,
  IconLock,
  IconShield,
  IconShieldLock,
} from "@tabler/icons-react";

export function DashcamSection() {
  return (
    <section id="dashcam" className="relative overflow-hidden py-16 md:py-28">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-background to-transparent opacity-80" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container px-4 md:px-6 relative z-10">
        <BlurFade className="mb-12 text-center">
          <BorderBeam
            colorFrom="var(--accent)"
            colorTo="var(--primary)"
            className="inline-block mb-8 rounded-xl"
          >
            <div className="mb-0 bg-background/80 px-6 py-4 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <IconCamera className="h-8 w-8 mr-4 text-accent" />
              <h2 className="text-2xl font-bold">Souriez, vous êtes filmés</h2>
            </div>
          </BorderBeam>

          <h3 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Système d&apos;
            <span className="text-primary">enregistrement vidéo</span> embarqué
          </h3>

          <p className="mx-auto max-w-[800px] text-muted-foreground text-lg">
            Conformément à la réglementation en vigueur, nous vous informons que
            ce véhicule est équipé d&apos;un système d&apos;enregistrement vidéo
            pour votre sécurité et la nôtre.
          </p>
        </BlurFade>

        {/* Version mobile - Accordéon simple */}
        <div className="md:hidden mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconAlertCircle className="h-5 w-5 text-accent" />
                Informations légales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    Base légale de l&apos;enregistrement
                  </AccordionTrigger>
                  <AccordionContent>
                    Ce traitement est fondé sur l&apos;intérêt légitime du
                    chauffeur VTC à assurer sa sécurité, celle des passagers, et
                    à protéger les biens, conformément à l&apos;article 6.1.f du
                    RGPD. L&apos;installation est conforme aux recommandations
                    de la CNIL.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    Protection des données
                  </AccordionTrigger>
                  <AccordionContent>
                    Toutes les données sont traitées conformément au RGPD. Vos
                    informations sont strictement protégées.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    Conservation des images
                  </AccordionTrigger>
                  <AccordionContent>
                    Les enregistrements vidéo sont conservés pour une durée
                    maximale de 30 jours, sauf en cas d&apos;incident
                    nécessitant une conservation plus longue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    Vos droits
                  </AccordionTrigger>
                  <AccordionContent>
                    Vous disposez d&apos;un droit d&apos;accès, de rectification
                    et d&apos;opposition concernant vos données personnelles.
                    Pour exercer ces droits ou pour toute question, vous pouvez
                    contacter le responsable du traitement à l&apos;adresse :
                    contact@youvtc.fr
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    Pourquoi cet équipement ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Sécurité des passagers et du chauffeur</li>
                      <li>
                        Prévention des incidents et comportements inappropriés
                      </li>
                      <li>Preuve vidéo en cas d&apos;accident de la route</li>
                      <li>Protection contre les fraudes et litiges</li>
                      <li>Obligation d&apos;information des passagers</li>
                      <li>Conformité avec la législation en vigueur</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Version desktop - BentoGrid */}
        <div className="hidden md:block">
          <BentoGrid className="gap-6">
            <BentoCard
              variant="feature"
              title="Information obligatoire"
              icon={<IconAd className="h-5 w-5" />}
              isHighlighted
              description="Conformément au RGPD et aux lois sur la vidéosurveillance"
              content={
                <div className="mt-4 h-full flex flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm p-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                      <div className="text-6xl font-display text-accent/30 mb-4">
                        CCTV
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold">
                          Zone sous vidéosurveillance
                        </h4>
                        <p className="text-sm">
                          Conformément aux articles L.251-1 et suivants
                          <br />
                          du code de la sécurité intérieure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <BentoCard
              title="Protection des données"
              icon={<IconShieldLock className="h-5 w-5" />}
              description="Toutes les données sont traitées conformément au RGPD. Vos informations sont strictement protégées."
            />

            <BentoCard
              title="Conservation des images"
              icon={<IconLock className="h-5 w-5" />}
              description="Les enregistrements vidéo sont conservés pour une durée maximale de 30 jours, sauf en cas d'incident nécessitant une conservation plus longue."
            />

            <BentoCard
              title="Information des passagers"
              icon={<IconFileInfo className="h-5 w-5" />}
              description="Une information claire sur la présence de la dashcam est affichée dans le véhicule. Vous pouvez exercer vos droits d'accès, rectification et opposition."
            />

            <BentoCard
              variant="wide"
              title="Pourquoi cet équipement ?"
              icon={<IconShield className="h-5 w-5" />}
              content={
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Sécurité des passagers et du chauffeur
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Prévention des incidents et comportements inappropriés
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Preuve vidéo en cas d&apos;accident de la route
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Protection contre les fraudes et litiges
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Obligation d&apos;information des passagers
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        ✓
                      </span>
                      Conformité avec la législation en vigueur
                    </li>
                  </ul>
                </div>
              }
            />

            <BentoCard
              variant="wide"
              title="Base légale et Vos droits"
              icon={<IconAlertCircle className="h-5 w-5" />}
              content={
                <ShineBorder
                  className="mt-4"
                  borderRadius="0.5rem"
                  shimmerColor="hsl(var(--primary)/0.3)"
                >
                  <div className="p-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          Base légale de l&apos;enregistrement
                        </AccordionTrigger>
                        <AccordionContent>
                          Ce traitement est fondé sur l&apos;intérêt légitime du
                          chauffeur VTC à assurer sa sécurité, celle des
                          passagers, et à protéger les biens, conformément à
                          l&apos;article 6.1.f du RGPD. L&apos;installation est
                          conforme aux recommandations de la CNIL.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Confidentialité des données
                        </AccordionTrigger>
                        <AccordionContent>
                          Les enregistrements sont strictement confidentiels et
                          ne sont conservés que pendant la durée légale
                          nécessaire (30 jours maximum). Ils ne sont accessibles
                          qu&apos;en cas d&apos;incident et sur demande
                          officielle. Votre vie privée est respectée
                          conformément au RGPD.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Vos droits concernant les enregistrements
                        </AccordionTrigger>
                        <AccordionContent>
                          Vous disposez d&apos;un droit d&apos;accès, de
                          rectification et d&apos;opposition concernant vos
                          données personnelles. Pour exercer ces droits ou pour
                          toute question, vous pouvez contacter le responsable
                          du traitement à l&apos;adresse : contact@youvtc.fr
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </ShineBorder>
              }
            />
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
