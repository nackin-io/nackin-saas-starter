import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Set up your environment, connect Supabase and Stripe, and run the app locally in minutes.',
    points: [
      'Install dependencies with npm install and copy .env.example to .env.local.',
      'Add NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and Stripe keys.',
      'Run npm run dev and open http://localhost:3000 to verify auth and billing flows.',
    ],
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Secure sign-up, login, and session handling powered by Supabase Auth.',
    points: [
      'Email/password and OAuth login flows are supported out of the box.',
      'Server-side auth utilities protect dashboard routes and API handlers.',
      'Role-aware patterns help enforce tenant and admin boundaries.',
    ],
  },
  {
    id: 'billing',
    title: 'Billing',
    description: 'Stripe subscriptions are prewired for checkout, upgrades, and billing management.',
    points: [
      'Hosted checkout and customer portal routes are ready to use.',
      'Webhook handlers sync subscription state into your application.',
      'Plan configuration lives in one place for easy pricing changes.',
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description: 'Core API routes for auth, projects, and billing operations.',
    points: [
      'Auth API: session checks and protected endpoint patterns.',
      'Projects API: CRUD endpoints with tenant-safe access logic.',
      'Stripe API: checkout, portal, and webhook handlers.',
    ],
  },
] as const

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <Badge variant="outline" className="mb-4">Documentation</Badge>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Developer docs for your SaaS starter
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            A concise guide to launching, securing, and monetizing your product with the included architecture.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-lg border bg-card p-4 lg:sticky lg:top-24">
            <p className="text-sm font-semibold">On this page</p>
            <ul className="mt-3 space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="scroll-mt-24 border-border/60">
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.points.map((point) => (
                      <li key={point} className="ml-5 list-disc">{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            <div className="pt-4">
              <Link href="/signup">
                <Button className="gap-2 bg-violet-600 text-white hover:bg-violet-700">
                  Build with the Starter
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
