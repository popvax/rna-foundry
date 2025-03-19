"use client"; // Add this directive at the top of the file

import { useState } from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
//import { Button } from "@/components/ui/button";
//import { Dna, ChevronRight } from "lucide-react";
import { Dna } from "lucide-react";
import Image from "next/image";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 } from "./images";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <Dna className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">RNA Foundry</span>
            </div>
          </Link>
        </div>
        </div>
      </header>

      <main className="flex-1">
        {/* First Section: Image on the Right */}
        <section className="relative overflow-hidden">
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                  Give us a sequence, and we&apos;ll take care of everything else
                </h1>
                <p className="max-w-[600px] text-xl text-muted-foreground">
                  The RNA Foundry works with researchers & biotechs to take their new mRNA biomedicines to clinical trial readiness end-to-end using PopVax’s mRNA-LNP and GMP platforms, starting with just the RNA sequence and ending with a Phase I-ready GMP batch of clinical doses, in 2 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Add buttons or other content here if needed */}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="RNA synthesis illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent -skew-y-6 transform-gpu z-0 translate-y-1/3" />
        </section>

        {/* Second Section: Image on the Left */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={img1}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  mRNA Engineering
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Design of the mRNA molecule, including untranslated regions (UTRs), signal sequences, and codon optimization, to enhance translation efficiency, stability, localization, and functional expression of the encoded protein.
                      </h3>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Advanced Lipid Innovations
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        We have designed over 600 ionizable lipids, with 80+ successfully tested in vivo. Our leading LNP formulation, based on our novel ionizable lipid, matches market-leading formulations in rodents for mRNA vaccine delivery with equivalent safety.
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">Our dedicated GMP Chemistry facility, equipped with an ISO 7/8 cleanroom, enables gram-scale production of ionizable lipids at 95%+ purity via HPLC-CAD. Our thermostable mRNA vaccine formulations are supported by a $1.15M grant from the Gates Foundation.</h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">Dr. Maunish Barvalia, our VP of Platform Technologies and Head of Immunology & Nucleic Acid Delivery, holds a PhD in Microbiology and Immunology (UBC). He has collaborated with Dr. Pieter Cullis at UBC and NanoVation Therapeutics on LNP-based immune cell targeting.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img3}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fourth section: Image on the Left */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={img2}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Custom mRNA-LNP Formulation
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        With your sequence and our optimized mRNA architecture, we can formulate mRNA-LNP using our proprietary ionizable lipid and provide samples for critical functional validation.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* fifth Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Toxicology & Biodistribution Expertise
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Leveraging our expertise, we will design and conduct toxicology and biodistribution studies for mRNA-LNPs in collaboration with trusted CROs, while you perform functional assays at your end.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* sixth section: Image on the Left */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={img4}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Advanced mRNA-LNP Process Development
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Our expert process development team specializes in optimizing mRNA-LNP formulations using our advanced platform technology. We ensure high yield, purity, functionality, and quality to deliver superior results.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* seventh Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  End-to-End GMP Manufacturing
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        We have a fully integrated GMP facility with ISO 7/8 cleanrooms, equipped with qualified manufacturing systems for end-to-end mRNA-LNP production, from pDNA synthesis to LNP encapsulation. Designed based on a successful pre-IND consultation with the FDA, our facility ensures compliance with regulatory expectations.
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">We are also expanding to include a small-scale fill-and-finish unit, expected to be operational by the end of this year. Our GMP facility currently has an annual production capacity of 1 million doses, with scalability to meet higher demand.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img5}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* seventh Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  End-to-End GMP Manufacturing
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        We have a fully integrated GMP facility with ISO 7/8 cleanrooms, equipped with qualified manufacturing systems for end-to-end mRNA-LNP production, from pDNA synthesis to LNP encapsulation. Designed based on a successful pre-IND consultation with the FDA, our facility ensures compliance with regulatory expectations.
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">We are also expanding to include a small-scale fill-and-finish unit, expected to be operational by the end of this year. Our GMP facility currently has an annual production capacity of 1 million doses, with scalability to meet higher demand.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img9}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* eigth section: Image on the Left */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={img6}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  GMP-Partner vendors
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        We have established relationships with reputable GMP-material vendors for all our components, as well as have alternatives and more cost-effective options for most of them. 
Our average lead time is 45 days from order to receipt while ensuring temperature-monitored shipping.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ninth Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Comprehensive Quality Control
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Our QC release laboratory is equipped with key analytical instruments for mRNA-LNP products, including multiple HPLCs with PDA, UV, ELSD, and CAD detectors, a high-resolution mass spectrometer (Q-TOF), NGS sequencer, a DLS instrument, a multimodal plate reader, and a dedicated cell culture lab.
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">We have developed assays for all critical quality attributes for mRNA-LNP, with the capability to rapidly adapt them to new products.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img7}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ninth Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Comprehensive Quality Control
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Our QC release laboratory is equipped with key analytical instruments for mRNA-LNP products, including multiple HPLCs with PDA, UV, ELSD, and CAD detectors, a high-resolution mass spectrometer (Q-TOF), NGS sequencer, a DLS instrument, a multimodal plate reader, and a dedicated cell culture lab.
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">We have developed assays for all critical quality attributes for mRNA-LNP, with the capability to rapidly adapt them to new products.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img8}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* eigth section: Image on the Left */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={img10}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  PopVax is pioneering AI-driven mRNA vaccines using RNA Foundry
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        We are a Gates Foundation-funded biotech company, focused on developing broadly protective mRNA vaccines through generative AI-driven computational protein design. Our team of 70+ experts works at the RNA Foundry, our integrated R&D and cGMP-clinical production facility in Hyderabad.
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">PopVax is committed to advancing innovative vaccines to address global infectious diseases and improve public health.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* ninth Section: Image on the Right */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  PopVax’s Best-in Class Seasonal Influenza Vaccine Design
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-muted-foreground">
                        Our lead program targets influenza, with our seasonal flu vaccine design showing strong immune responses, eliciting as much as 250-fold higher immune responses. This progress helped us win the first stage of the U.S. Biomedical Advanced Research and Development Authority's (BARDA) Patch Forward Prize, earning a $2M award from the U.S. Government.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img11}
                  width={600}
                  height={500}
                  alt="RNA manufacturing process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

{/* Tenth Section: Timeline & Cost */}
<section className="py-16 md:py-24 bg-white">
  <div className="container">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Timeline & Cost
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Our end-to-end service takes approximately <strong>2 years</strong> to deliver a Phase I-ready GMP batch of clinical doses. Below is a high-level timeline and cost breakdown:
      </p>

      {/* Placeholder for Gantt Chart */}
      <div className="mb-12">
        <Image
          src="/placeholder.svg?height=300&width=800"
          width={800}
          height={300}
          alt="Timeline Gantt Chart"
          className="rounded-lg object-cover mx-auto"
        />
        <p className="text-sm text-muted-foreground mt-2">
          *Gantt chart illustrating the 2-year timeline for end-to-end service.
        </p>
      </div>

      {/* Cost Details */}
      <div className="space-y-6 text-left max-w-2xl mx-auto">
        <div className="flex gap-4">
          <div className="rounded-full bg-primary/10 p-2 h-fit">
            <svg
              className="h-5 w-5 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl text-muted-foreground">
              <strong>Service Fee:</strong> $10 million for end-to-end service, covering everything from sequence design to GMP manufacturing.
            </h3>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="rounded-full bg-primary/10 p-2 h-fit">
            <svg
              className="h-5 w-5 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl text-muted-foreground">
              <strong>Royalty:</strong> 4% royalty on net sales for use of our platform.
            </h3>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="rounded-full bg-primary/10 p-2 h-fit">
            <svg
              className="h-5 w-5 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl text-muted-foreground">
              <strong>Milestones:</strong> Additional milestone payments tied to key achievements, such as IND approval and Phase I completion.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          
      {/* Add a Contact Us button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        Contact Us
      </button>

      {/* Render the Contact Form as a popup */}
      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    
      </main>
    </div>
  );
}
