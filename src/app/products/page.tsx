import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight, ArrowRight } from "lucide-react"

export default function ProductsPage() {
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
              <Link href="/products" className="text-sm font-medium text-primary">
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

      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">RNA Products & Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our comprehensive suite of RNA synthesis and manufacturing services supports your therapeutic
                development from concept to clinic.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                  <Dna className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">mRNA Synthesis</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mRNA synthesis platform delivers high-quality, customized mRNA for therapeutic applications with
                  industry-leading purity and yield.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Optimized 5' cap structures for enhanced stability and translation efficiency</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Codon optimization for maximum protein expression</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Customizable poly-A tails for optimal stability</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Scalable from milligram to gram quantities</span>
                  </li>
                </ul>
                <Button>
                  Learn more about mRNA synthesis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="mRNA synthesis illustration"
                  className="rounded-lg object-cover"
                />
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
                  alt="siRNA and miRNA illustration"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">LNP Formulations</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our lipid nanoparticle (LNP) formulation platform enables efficient delivery of RNA therapeutics to
                  target tissues with customizable compositions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Customizable lipid compositions for tissue-specific targeting</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Optimized encapsulation efficiency and particle size distribution</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Comprehensive physicochemical characterization</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Scalable manufacturing from preclinical to clinical quantities</span>
                  </li>
                </ul>
                <Button>
                  Learn more about LNP formulation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Analytical capabilities</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Validated assays for every critical parameter from pDNA to mRNA-LNP to the final drug product. 
                  
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Capability 1</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Capability 2</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Capability 3</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1 h-fit mt-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Capability 4</span>
                  </li>
                </ul>
                
                <Button>
                  Learn more about our analytical capabilities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="LNP formulation illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your RNA project?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team of experts is ready to help you bring your RNA therapeutics to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Request a quote</Button>
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
                <span className="text-xl font-bold">RNAsynth</span>
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
                    siRNA & miRNA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    LNP Formulation
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
              © {new Date().getFullYear()} RNAsynth, Inc. All rights reserved.
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

