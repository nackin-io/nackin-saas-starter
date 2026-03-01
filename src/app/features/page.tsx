import Link from 'next/link'
import { ArrowRight, BarChart3, Code2, Globe, Shield, Users, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const featureCards = [
  {
    icon: Zap,
    title: 'Fast Time to Market',
    description: 'Launch with a production-ready Next.js foundation, typed APIs, and sane defaults so your team can ship core workflows in days.',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Email/password and OAuth flows are prewired with Supabase Auth, including role-safe patterns and secure server-side session handling.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    description: 'Track revenue, subscriptions, and user activity from a clean dashboard built for product and growth teams.',
  },
  {
    icon: Users,
    title: 'Team and Tenant Support',
    description: 'Handle multi-user SaaS scenarios with member invites, scoped access, and workspace-friendly architecture.',
  },
  {
    icon: Globe,
    title: 'Global-Ready UI',
    description: 'Responsive layouts and performance-focused rendering provide a fast experience for customers on any device.',
  },
  {
    icon: Code2,
    title: 'Developer-First Stack',
    description: 'TypeScript across the stack, reusable UI primitives, and predictable folder structure keep iteration fast as your product grows.',
  },
] as const

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to launch and scale a SaaS
          </h1>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Built-in auth, billing, analytics, and production-grade architecture so your team can focus on product, not boilerplate.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <Card key={feature.title} className="border-border/60">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/signup">
            <Button size="lg" className="gap-2 bg-violet-600 text-white hover:bg-violet-700">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
