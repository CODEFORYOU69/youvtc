"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
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
            </motion.div>
          </Link>
        </div>

        {/* Navigation bureau */}
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/#home"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Accueil
          </Link>
          <Link
            href="/#dashcam"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Dashcam
          </Link>
          <Link
            href="/#legal"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Légal
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            À propos
          </Link>
          <Button
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/#contact" className="text-sm font-medium">
              Contact
            </Link>
          </Button>
        </nav>

        {/* Menu mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              {isOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 pt-8">
              <Link
                href="/#home"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/#dashcam"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Dashcam
              </Link>
              <Link
                href="/#legal"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Légal
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Button
                variant="default"
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
              >
                <Link
                  href="/#contact"
                  className="text-sm font-medium w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
