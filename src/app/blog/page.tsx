import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const posts = [
  {
    title: 'How We Took a B2B SaaS from Idea to First $10k MRR',
    excerpt: 'A practical breakdown of the first 30 days: user interviews, pricing tests, and the technical stack choices that accelerated launch.',
    date: '2025-02-10',
    readTime: '8 min read',
    category: 'Growth',
    href: '#',
  },
  {
    title: 'Stripe Webhooks Without Headaches: Production Patterns',
    excerpt: 'Learn idempotent webhook handling, retry-safe event processing, and monitoring strategies that prevent billing drift.',
    date: '2025-01-22',
    readTime: '6 min read',
    category: 'Engineering',
    href: '#',
  },
  {
    title: 'Designing a SaaS Dashboard Users Understand in 30 Seconds',
    excerpt: 'Dashboard UX principles for reducing cognitive load, surfacing key metrics, and improving activation for new accounts.',
    date: '2024-12-19',
    readTime: '7 min read',
    category: 'Product',
    href: '#',
  },
] as const

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Insights for SaaS builders
          </h1>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Product, growth, and engineering lessons from teams shipping modern subscription software.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="border-border/60">
              <CardHeader>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant="outline">{post.category}</Badge>
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-5">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Link href={post.href}>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
