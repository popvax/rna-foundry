import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
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
            <Link href="#" className="text-sm font-medium hover:text-primary">
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
        <section className="relative overflow-hidden">
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Accelerate your RNA therapeutics
                </h1>
                <p className="max-w-[600px] text-xl text-muted-foreground">
                The RNA Foundry works with researchers & biotechs to take their new mRNA biomedicines to clinical trial readiness end-to-end using PopVax’s mRNA-LNP and GMP platforms, starting with just the RNA sequence and ending with a Phase I-ready GMP batch of clinical doses,  in 2 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start your project
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Talk to an expert
                  </Button>
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

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-lg font-medium text-primary">Why RNA Foundry?</h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Give us a sequence, and we’ll take care of everything else</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Rapid Turnaround</h4>
                <p className="mt-2 text-muted-foreground">
                  End-to-end mRNA-LNP platform [UTRS, codon optimization, LNPs] that we can license for global use
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">GMP Compliant</h4>
                <p className="mt-2 text-muted-foreground">
                  Deep expertise in toxicity and biodistribution studies for mRNA-LNP products
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Seamless Scaling</h4>
                <p className="mt-2 text-muted-foreground">
                  Fast-turnaround Phase I-appropriate GMP process and facility, with all key analytical methods set up at our in-house QC release lab
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  End-to-end RNA manufacturing solutions
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
                      <h3 className="text-xl font-bold">mRNA Synthesis</h3>
                      <p className="text-muted-foreground mt-1">
                        Custom mRNA production with optimized 5' caps, coding sequences, and poly-A tails for maximum
                        expression.
                      </p>
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
                      <h3 className="text-xl font-bold">LNP Formulation</h3>
                      <p className="text-muted-foreground mt-1">
                        Diverse ionizable lipid library with advanced lipid nanoparticle encapsulation for optimal delivery and cellular uptake.
                      </p>
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
                      <h3 className="text-xl font-bold">Complete Quality Control</h3>
                      <p className="text-muted-foreground mt-1">
                        Validated assays for every critical parameter from pDNA to mRNA-LNP to the final drug product. 
                      </p>
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

        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Trusted by leading biotech companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
              <Image src="/placeholder.svg?height=60&width=160" width={160} height={60} alt="Client logo" />
              <Image src="/placeholder.svg?height=60&width=160" width={160} height={60} alt="Client logo" />
              <Image src="/placeholder.svg?height=60&width=160" width={160} height={60} alt="Client logo" />
              <Image src="/placeholder.svg?height=60&width=160" width={160} height={60} alt="Client logo" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to accelerate your RNA development?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team of experts is ready to help you bring your RNA therapeutics to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start your project</Button>
              <Button size="lg" variant="outline">
                Schedule a consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dna className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">RNA Foundry</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Accelerating RNA therapeutics from discovery to clinic with cutting-edge CDMO services.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    mRNA Synthesis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    LNP Formulation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    GMP Production
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RNA Foundry, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

