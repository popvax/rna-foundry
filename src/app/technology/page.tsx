import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight, ArrowRight } from "lucide-react"

export default function TechnologyPage() {
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
              <Link href="/technology" className="text-sm font-medium text-primary">
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our RNA Technology Platform</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the cutting-edge technologies that power our RNA synthesis and manufacturing capabilities,
                enabling the next generation of RNA therapeutics.
              </p>
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
                <h2 className="text-3xl font-bold tracking-tight mb-4">SynthPro™ RNA Synthesis Platform</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our proprietary SynthPro™ platform combines enzymatic and chemical synthesis approaches to produce
                  high-quality RNA with unprecedented purity and yield.
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
                    <span>Engineered enzymes for improved incorporation of modified nucleotides</span>
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
                    <span>Advanced capping chemistry for enhanced translation efficiency</span>
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
                    <span>Proprietary purification methods for ultra-high purity (>99%)</span>
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
                    <span>Scalable from milligrams to multi-gram quantities</span>
                  </li>
                </ul>
                <Button>
                  Learn more about SynthPro™ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="RNA synthesis platform illustration"
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
                  alt="LNP formulation platform illustration"
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
                <h2 className="text-3xl font-bold tracking-tight mb-4">NanoDeliver™ LNP Platform</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our NanoDeliver™ platform enables the development of lipid nanoparticle formulations with enhanced
                  tissue targeting and cellular uptake properties.
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
                    <span>Library of proprietary ionizable lipids for tissue-specific targeting</span>
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
                    <span>Microfluidic-based manufacturing for precise particle size control</span>
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
                    <span>Advanced analytical methods for comprehensive characterization</span>
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
                    <span>Scalable manufacturing process from lab to commercial scale</span>
                  </li>
                </ul>
                <Button>
                  Learn more about NanoDeliver™ <ArrowRight className="ml-2 h-4 w-4" />
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">AnalytX™ Quality Control Platform</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our AnalytX™ platform provides comprehensive characterization and quality control of RNA therapeutics,
                  ensuring the highest standards of purity, potency, and safety.
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
                    <span>Advanced chromatography and mass spectrometry methods</span>
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
                    <span>Next-generation sequencing for sequence verification</span>
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
                    <span>Automated in-process and release testing</span>
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
                    <span>Digital data management and regulatory-compliant documentation</span>
                  </li>
                </ul>
                <Button>
                  Learn more about AnalytX™ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Analytics platform illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interested in our technology?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Schedule a technical consultation with our scientists to learn how our platform can accelerate your RNA
                therapeutic development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a technical consultation</Button>
              <Button size="lg" variant="outline">
                Download technology whitepaper
              </Button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

