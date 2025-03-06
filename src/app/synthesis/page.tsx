import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight } from "lucide-react"

export default function SynthesisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Dna className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RNA Foundry</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary">
                Products <ChevronRight className="inline h-4 w-4" />
              </Link>
              <Link href="/solutions" className="text-sm font-medium hover:text-primary">
                Solutions <ChevronRight className="inline h-4 w-4" />
              </Link>
              <Link href="/technology" className="text-sm font-medium hover:text-primary">
                Technology <ChevronRight className="inline h-4 w-4" />
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Get started</Button>
          </div>
        </div>
      </header>
      
      <div className="border-b">
        <div className="container flex items-center py-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-md">
              <Dna className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-medium">Synthesis</span>
          </div>
          <nav className="ml-auto flex gap-6">
            <Link href="/synthesis" className="text-sm font-medium text-primary">
              Overview
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Guides
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Docs
            </Link>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  RNA Synthesis Platform
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Our state-of-the-art RNA synthesis platform enables the production of high-quality RNA for therapeutic applications with unmatched purity and scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Start your project
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn more
                  </Button>
                </div>
              </div>
              <div>
                <Image 
                  src="/placeholder.svg?height=400&width=500" 
                  width={500} 
                  height={400} 
                  alt="RNA synthesis illustration" 
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our RNA synthesis process combines enzymatic and chemical approaches to produce high-quality RNA with unprecedented purity and yield.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Our team works with you to design the optimal RNA sequence for your application, including codon optimization and structural considerations.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Synthesis</h3>
                <p className="text-muted-foreground">
                  Using our proprietary SynthPro™ platform, we synthesize your RNA with high efficiency and accuracy, incorporating any required modifications.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Purification</h3>
                <p className="text-muted-foreground">
                  Our advanced purification methods ensure your RNA meets the highest standards of purity, removing impurities and truncated sequences.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">QC & Delivery</h3>
                <p className="text-muted-foreground">
                  Comprehensive quality control testing ensures your RNA meets all specifications before being delivered in your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <Image 
                  src="/placeholder.svg?height=400&width=500" 
                  width={500} 
                  height={400} 
                  alt="RNA synthesis capabilities" 
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Synthesis Capabilities
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our platform supports a wide range of RNA synthesis capabilities to meet your specific requirements.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">mRNA with Custom 5' Caps</h4>
                      <p className="text-muted-foreground">Cap-0, Cap-1, and CleanCap® analogs for optimal translation efficiency</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Modified Nucleotides</h4>
                      <p className="text-muted-foreground">Pseudouridine, 5-methylcytidine, N1-methylpseudouridine, and other modifications</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Poly-A Tails</h4>
                      <p className="text-muted-foreground">Customizable poly-A tail length for optimal stability and translation</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5\

