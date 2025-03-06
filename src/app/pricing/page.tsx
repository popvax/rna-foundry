import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dna, ChevronRight, Check } from "lucide-react"

export default function PricingPage() {
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
              <Link href="/pricing" className="text-sm font-medium text-primary">
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Transparent Pricing for RNA Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the right plan for your RNA therapeutic development needs, from discovery to clinical
                manufacturing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Discovery Package */}
              <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Discovery</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-extrabold tracking-tight">$50,000</span>
                    <span className="ml-1 text-xl font-semibold">/batch</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Perfect for early-stage research and candidate screening.
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Small-scale mRNA synthesis (up to 10 mg)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Standard quality control testing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Basic sequence optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>6-week turnaround time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Technical support</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full">Get started</Button>
                </div>
              </div>

              {/* Preclinical Package */}
              <div className="bg-card rounded-lg border shadow-sm overflow-hidden relative">
{/*                 <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Popular
                </div> */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Preclinical</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-extrabold tracking-tight">$250,000</span>
                    <span className="ml-1 text-xl font-semibold">/batch</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Ideal for IND-enabling studies and preclinical development.
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Medium-scale mRNA synthesis (up to 100 mg)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Comprehensive quality control testing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Advanced sequence optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>LNP formulation options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>4 months turnaround time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Dedicated project manager</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full">Get started</Button>
                </div>
              </div>

              {/* Clinical Package */}
              <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Clinical</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-xl font-semibold">Custom pricing</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">GMP-compliant manufacturing for clinical trials.</p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Large-scale GMP manufacturing (grams)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Full release testing and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Stability studies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Regulatory support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Custom timeline based on project scope</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>Dedicated project team</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full">Contact sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about our RNA CDMO services and pricing.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What is included in the quality control testing?</h3>
                  <p className="text-muted-foreground">
                    Our standard quality control testing includes purity analysis by HPLC, identity confirmation by mass
                    spectrometry, endotoxin testing, and bioburden testing. Comprehensive testing adds additional
                    characterization methods and more extensive documentation.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">
                    How long does it take to manufacture RNA for clinical trials?
                  </h3>
                  <p className="text-muted-foreground">
                    The timeline for GMP manufacturing depends on the scale and complexity of your project. Typically,
                    it takes 3-6 months from project initiation to final release, including process development,
                    manufacturing, testing, and documentation.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Can you help with regulatory submissions?</h3>
                  <p className="text-muted-foreground">
                    Yes, our regulatory affairs team can provide support for IND/CTA submissions, including preparation
                    of CMC documentation, regulatory strategy consultation, and responses to regulatory agency
                    questions.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Do you offer discounts for academic institutions?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer special pricing for academic institutions and non-profit organizations. Please contact
                    our sales team for more information about our academic partnership program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need a custom solution?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team will work with you to develop a tailored solution that meets your specific requirements and
                budget.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact sales</Button>
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

