import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight, ArrowRight } from "lucide-react"

export default function SolutionsPage() {
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
              <Link href="/solutions" className="text-sm font-medium text-primary">
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">RNA Solutions for Every Stage</h1>
              <p className="text-xl text-muted-foreground mb-8">
                From discovery to clinical trials, our end-to-end RNA CDMO services are tailored to meet the unique
                needs of your therapeutic development program.
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Discovery & Preclinical</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Accelerate your early-stage RNA therapeutic development with our comprehensive discovery and
                  preclinical solutions.
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
                    <span>High-throughput RNA synthesis for candidate screening</span>
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
                    <span>Sequence optimization and chemical modification screening</span>
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
                    <span>Delivery formulation development and optimization</span>
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
                    <span>In vitro and in vivo efficacy testing support</span>
                  </li>
                </ul>
                <Button>
                  Explore discovery solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Discovery and preclinical illustration"
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
                  alt="Clinical manufacturing illustration"
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Clinical Manufacturing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our GMP-compliant manufacturing facilities and processes ensure your RNA therapeutics meet the highest
                  quality standards for clinical trials.
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
                    <span>cGMP-compliant RNA synthesis from Phase I to Phase III</span>
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
                    <span>Comprehensive analytical testing and release</span>
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
                    <span>Stability testing and ICH-compliant storage</span>
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
                    <span>Regulatory documentation support for IND/CTA filings</span>
                  </li>
                </ul>
                <Button>
                  Explore clinical manufacturing <ArrowRight className="ml-2 h-4 w-4" />
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Commercial Manufacturing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Scale your RNA therapeutic production with our commercial manufacturing solutions designed for
                  reliability, consistency, and regulatory compliance.
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
                    <span>Large-scale GMP manufacturing capabilities</span>
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
                    <span>Process validation and tech transfer support</span>
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
                    <span>Supply chain management and logistics</span>
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
                    <span>Comprehensive regulatory support for BLA/MAA submissions</span>
                  </li>
                </ul>
                <Button>
                  Explore commercial solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Commercial manufacturing illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Find the right solution for your RNA therapeutic
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team of experts will work with you to develop a customized solution that meets your specific needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a consultation</Button>
              <Button size="lg" variant="outline">
                Download solutions guide
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

