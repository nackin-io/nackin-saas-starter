import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const releases = [
  {
    version: 'v1.3.0',
    date: '2025-01-15',
    notes: [
      'Added role-based access controls for workspace members and admins.',
      'Improved Stripe webhook reliability with stronger idempotency handling.',
      'Reduced dashboard query latency by 38% with targeted database indexes.',
      'Introduced audit trail events for billing and authentication actions.',
    ],
  },
  {
    version: 'v1.2.0',
    date: '2024-12-01',
    notes: [
      'Released onboarding checklist to speed up first-project activation.',
      'Added CSV export for analytics and billing summaries.',
      'Improved mobile dashboard layouts and responsive table behavior.',
      'Added failed-payment email notifications and retry visibility.',
    ],
  },
  {
    version: 'v1.1.0',
    date: '2024-10-15',
    notes: [
      'Launched team workspaces with member invite and removal flows.',
      'Added API key management UI with basic usage tracking.',
      'Enabled persistent theme preferences across sessions.',
      'Shipped initial admin controls for account health and plan status.',
    ],
  },
] as const

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">Changelog</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Product updates and releases
          </h1>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Track improvements across platform reliability, billing, and developer experience.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {releases.map((release) => (
            <Card key={release.version} className="border-border/60">
              <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-xl">{release.version}</CardTitle>
                <span className="text-sm text-muted-foreground">{release.date}</span>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {release.notes.map((note) => (
                    <li key={note} className="ml-5 list-disc">{note}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
