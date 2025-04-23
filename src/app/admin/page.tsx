"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconDownload,
  IconEye,
  IconEyeOff,
  IconLogout,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [qrValue, setQrValue] = useState("https://youvtc.fr");
  const [qrName, setQrName] = useState("Carte Passager");
  const [qrBackgroundColor, setQrBackgroundColor] = useState("#FFFFFF");
  const [qrForegroundColor, setQrForegroundColor] = useState("#000000");
  const [cardTitle, setCardTitle] = useState("YouVTC - Dashcam embarquée");
  const [cardDescription, setCardDescription] = useState(
    "Scannez ce QR code pour plus d'informations sur notre service VTC avec dashcam"
  );
  const [cardTemplate, setCardTemplate] = useState("passenger"); // 'passenger' ou 'business'

  // Vérifier l'authentification au chargement de la page
  useEffect(() => {
    const isAuth = localStorage.getItem("youvtc-auth") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  // Fonction d'authentification
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mot de passe simple pour l'exemple (à remplacer par une méthode plus sécurisée)
    if (password === "adminvtc") {
      localStorage.setItem("youvtc-auth", "true");
      setIsAuthenticated(true);
      toast.success("Authentification réussie!");
    } else {
      toast.error("Mot de passe incorrect");
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("youvtc-auth");
    setIsAuthenticated(false);
    toast.success("Vous avez été déconnecté");
  };

  // Télécharger le QR code en PNG
  const downloadQRCodePNG = () => {
    const canvas = document.getElementById("qr-card");
    if (canvas) {
      html2canvas(canvas).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${qrName.toLowerCase().replace(/\s+/g, "-")}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  // Télécharger le QR code en PDF
  const downloadQRCodePDF = () => {
    const canvas = document.getElementById("qr-card");
    if (canvas) {
      html2canvas(canvas).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: [85, 55], // Taille d'une carte de visite standard
        });
        pdf.addImage(imgData, "PNG", 0, 0, 85, 55);
        pdf.save(`${qrName.toLowerCase().replace(/\s+/g, "-")}.pdf`);
      });
    }
  };

  // Utiliser un template prédéfini
  const applyTemplate = (template: string) => {
    setCardTemplate(template);

    if (template === "passenger") {
      setQrValue("https://youvtc.fr/#dashcam");
      setQrName("Carte Passager");
      setCardTitle("YouVTC - Dashcam embarquée");
      setCardDescription(
        "Scannez ce QR code pour plus d'informations sur notre service VTC avec dashcam"
      );
      setQrBackgroundColor("#E5E7EB");
      setQrForegroundColor("#0F172A");
    } else if (template === "business") {
      setQrValue("https://portfolio.younesouasmi.fr");
      setQrName("Carte de visite");
      setCardTitle("Younes Ouasmi");
      setCardDescription("Chauffeur VTC & Développeur Web");
      setQrBackgroundColor("#0F172A");
      setQrForegroundColor("#60A5FA");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Admin YouVTC</CardTitle>
                <CardDescription>
                  Connectez-vous pour accéder au générateur de QR code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-full"
                      >
                        {showPassword ? (
                          <IconEyeOff className="h-4 w-4" />
                        ) : (
                          <IconEye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Se connecter
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <div className="mb-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold">Administration YouVTC</h1>
            <p className="text-muted-foreground">
              Générez vos QR codes et cartes personnalisées
            </p>
          </motion.div>
          <Button variant="outline" onClick={handleLogout}>
            <IconLogout className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Générateur de QR Code</CardTitle>
                <CardDescription>
                  Personnalisez votre QR code et téléchargez-le
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="template" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="template">Templates</TabsTrigger>
                    <TabsTrigger value="custom">Personnalisé</TabsTrigger>
                  </TabsList>
                  <TabsContent value="template" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Button
                        variant={
                          cardTemplate === "passenger" ? "default" : "outline"
                        }
                        onClick={() => applyTemplate("passenger")}
                        className="h-auto p-4 flex flex-col items-center justify-center"
                      >
                        <span className="mb-2 text-lg font-medium">
                          Carte Passager
                        </span>
                        <span className="text-sm text-muted-foreground">
                          QR vers page dashcam
                        </span>
                      </Button>
                      <Button
                        variant={
                          cardTemplate === "business" ? "default" : "outline"
                        }
                        onClick={() => applyTemplate("business")}
                        className="h-auto p-4 flex flex-col items-center justify-center"
                      >
                        <span className="mb-2 text-lg font-medium">
                          Carte de visite
                        </span>
                        <span className="text-sm text-muted-foreground">
                          QR vers portfolio
                        </span>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="custom" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="qr-name">Nom de la carte</Label>
                      <Input
                        id="qr-name"
                        value={qrName}
                        onChange={(e) => setQrName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="qr-value">URL du QR code</Label>
                      <Input
                        id="qr-value"
                        value={qrValue}
                        onChange={(e) => setQrValue(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-title">Titre de la carte</Label>
                      <Input
                        id="card-title"
                        value={cardTitle}
                        onChange={(e) => setCardTitle(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-description">Description</Label>
                      <Input
                        id="card-description"
                        value={cardDescription}
                        onChange={(e) => setCardDescription(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="qr-bg-color">Couleur de fond</Label>
                        <div className="flex">
                          <Input
                            id="qr-bg-color"
                            value={qrBackgroundColor}
                            onChange={(e) =>
                              setQrBackgroundColor(e.target.value)
                            }
                            className="rounded-r-none"
                          />
                          <div
                            className="w-10 border border-l-0 border-input rounded-r-md"
                            style={{ backgroundColor: qrBackgroundColor }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="qr-fg-color">Couleur du QR</Label>
                        <div className="flex">
                          <Input
                            id="qr-fg-color"
                            value={qrForegroundColor}
                            onChange={(e) =>
                              setQrForegroundColor(e.target.value)
                            }
                            className="rounded-r-none"
                          />
                          <div
                            className="w-10 border border-l-0 border-input rounded-r-md"
                            style={{ backgroundColor: qrForegroundColor }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Aperçu et téléchargement</CardTitle>
                <CardDescription>
                  Prévisualisez et téléchargez votre carte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  id="qr-card"
                  className="mx-auto w-[320px] rounded-lg p-6 shadow-md"
                  style={{
                    backgroundColor: qrBackgroundColor,
                    color: qrForegroundColor,
                  }}
                >
                  <div className="mb-4 text-center">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: qrForegroundColor }}
                    >
                      {cardTitle}
                    </h3>
                    <p
                      className="mt-1 text-sm opacity-80"
                      style={{ color: qrForegroundColor }}
                    >
                      {cardDescription}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <QRCode
                      value={qrValue}
                      size={200}
                      bgColor={qrBackgroundColor}
                      fgColor={qrForegroundColor}
                      level="H"
                    />
                  </div>
                  <div
                    className="mt-4 text-center text-sm opacity-80"
                    style={{ color: qrForegroundColor }}
                  >
                    www.youvtc.fr
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button onClick={downloadQRCodePNG} variant="outline">
                    <IconDownload className="mr-2 h-4 w-4" />
                    PNG
                  </Button>
                  <Button onClick={downloadQRCodePDF}>
                    <IconDownload className="mr-2 h-4 w-4" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
