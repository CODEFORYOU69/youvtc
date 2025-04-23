"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconDownload, IconSend, IconUser } from "@tabler/icons-react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Image from "next/image";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Construire le corps de l'email
      const emailBody = `
        Nom: ${formData.name}
        Email: ${formData.email}
        Téléphone: ${formData.phone}
        Message: ${formData.message}
      `;

      // Utiliser mailto pour ouvrir le client email par défaut
      const mailtoLink = `mailto:y.ouasmi@gmail.com?subject=Nouveau message depuis YouVTC&body=${encodeURIComponent(
        emailBody
      )}`;

      // Ouvrir le lien mailto
      window.open(mailtoLink, "_blank");

      // Vous pouvez aussi envoyer le message directement via un service comme EmailJS
      // Cette section peut être décommentée si vous configurez EmailJS
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      toast.success("Message préparé! Votre client email va s'ouvrir.");

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = () => {
    const card = document.getElementById("business-card");
    if (card) {
      html2canvas(card).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: [85, 55],
        });
        pdf.addImage(imgData, "PNG", 0, 0, 85, 55);
        pdf.save("younes-ouasmi-vtc.pdf");
      });
    }
  };

  const downloadContact = () => {
    // Créer un vCard
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:Ouasmi;Younes;;;
FN:Younes Ouasmi
ORG:YouVTC
TITLE:Chauffeur VTC & Développeur
TEL;TYPE=CELL:+33781582955
EMAIL:y.ouasmi@gmail.com
URL:https://youvtc.vercel.app
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, "younes-ouasmi.vcf");
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <BlurFade className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contactez-<span className="text-primary">moi</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Pour réserver ou pour plus d&apos;informations
          </p>
        </BlurFade>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <BlurFade>
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                  <CardDescription>
                    Je vous répondrai dans les plus brefs délais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Votre numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <IconSend className="mr-2 h-4 w-4" />
                          Envoyer
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Téléchargez ma carte de visite</CardTitle>
                  <CardDescription>
                    Gardez mes informations à portée de main
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center py-4">
                    <div
                      id="business-card"
                      className="relative h-48 w-80 overflow-hidden rounded-lg p-6 shadow-md"
                      style={{
                        background:
                          "linear-gradient(to right, #d6e4ff, #efe9d9)",
                        color: "#1a202c",
                      }}
                    >
                      {/* Éléments décoratifs */}
                      <div
                        className="absolute top-0 right-0 h-24 w-24 rounded-full opacity-20"
                        style={{ background: "#d4af37" }}
                      ></div>
                      <div
                        className="absolute bottom-0 left-0 h-20 w-20 rounded-full opacity-20"
                        style={{ background: "#60a5fa" }}
                      ></div>

                      {/* Image en filigrane à gauche */}
                      <div className="absolute top-0 left-0 h-full w-1/2 pointer-events-none opacity-8 overflow-hidden">
                        <Image
                          src="/images/profile.jpg"
                          alt=""
                          fill
                          className="object-cover"
                          style={{
                            objectPosition: "center",
                            transform: "scale(1.2)",
                          }}
                        />
                      </div>

                      <div className="relative z-10 flex h-full">
                        {/* Partie gauche - Informations */}
                        <div className="flex-1 flex flex-col justify-between pr-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden"
                                style={{ background: "#e5e7eb" }}
                              >
                                <Image
                                  src="/images/logo.jpg"
                                  alt="Younes Ouasmi"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <h3
                                className="text-xl font-bold leading-tight"
                                style={{ color: "#1a202c" }}
                              >
                                Younes Ouasmi
                              </h3>
                            </div>
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#4a5568" }}
                            >
                              Chauffeur VTC & Développeur
                            </p>
                          </div>

                          <div className="space-y-1">
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#1a202c" }}
                            >
                              +33 7 81 58 29 55
                            </p>
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#1a202c" }}
                            >
                              y.ouasmi@gmail.com
                            </p>
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#1a202c" }}
                            >
                              www.youvtc.vercel.app
                            </p>
                          </div>
                        </div>

                        {/* Partie droite - QR Code */}
                        <div
                          className="flex flex-col items-center justify-center pl-4"
                          style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="bg-white p-1 rounded-md mb-2 shadow-sm">
                            <QRCode
                              value="https://youvtc.vercel.app"
                              size={70}
                              bgColor="#ffffff"
                              fgColor="#000000"
                              level="M"
                            />
                          </div>
                          <span
                            className="text-xs font-bold text-center"
                            style={{ color: "#1a202c" }}
                          >
                            Scanner moi
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center gap-4">
                    <Button
                      variant="outline"
                      onClick={downloadPDF}
                      className="flex-1"
                    >
                      <IconDownload className="mr-2 h-4 w-4" />
                      PDF
                    </Button>

                    <Button
                      variant="default"
                      onClick={downloadContact}
                      className="flex-1"
                    >
                      <IconUser className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
