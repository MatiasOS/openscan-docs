"use client"

import { useMemo, useState } from "react"
import { InfoCard, PageHeader, StepSection } from "@/components/docs-components"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FeatureList, FeatureListItem } from "@/components/ui/feature-list"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Compass, ExternalLink, Network, Vote } from "lucide-react"

type SubscriptionCategory = "tokens" | "networks" | "apps" | "companies"
type TierName = "Backer" | "Partner" | "Ally"
type TierKey = "backer" | "partner" | "ally"

interface TierBenefit {
  tier: TierName
  tierKey: TierKey
  benefits: string[]
}

interface SubscriptionType {
  id: SubscriptionCategory
  name: string
  basePrice: number
  description: string
  tiers: TierBenefit[]
}

const tierMultipliers: Record<TierName, number> = {
  Backer: 1,
  Partner: 3,
  Ally: 6,
}

const tierOrder: TierName[] = ["Backer", "Partner", "Ally"]
const OPENSCAN_DAO_ADDRESS = "openscan.eth"

const SUBSCRIPTION_REPO_URL =
  "https://github.com/openscan-explorer/explorer-metadata"
const DEVTOOLS_URL = "https://openscan.eth.link/#/devtools"
const DAO_ADDRESS_URL = `https://openscan.eth.link/#/1/address/${OPENSCAN_DAO_ADDRESS}`

const subscriptionTypes: SubscriptionType[] = [
  {
    id: "tokens",
    name: "Tokens",
    basePrice: 500,
    description:
      "Verified contracts tags, metadata integration, logo display, official links and token balance fetcher integration.",
    tiers: [
      {
        tier: "Backer",
        tierKey: "backer",
        benefits: [
          "Token page with token info: ERC20 details, project name, custom URLs",
          "Verified contracts and tagged important contracts",
        ],
      },
      {
        tier: "Partner",
        tierKey: "partner",
        benefits: [
          "Token balance shown on the main explorer",
          "Simple profile page",
          "Multiple network listing",
        ],
      },
      {
        tier: "Ally",
        tierKey: "ally",
        benefits: [
          "Complete profile page with markdown description",
          "OpenScan subdomain",
          "Direct communication line with the technical team",
        ],
      },
    ],
  },
  {
    id: "networks",
    name: "Networks",
    basePrice: 2000,
    description:
      "Full RPC methods support, dedicated technical maintenance, subdomain availability, and prominent branding.",
    tiers: [
      {
        tier: "Backer",
        tierKey: "backer",
        benefits: [
          "Markdown profile on the network page",
          "Priority placement on the home page",
        ],
      },
      {
        tier: "Partner",
        tierKey: "partner",
        benefits: [
          "Dedicated subdomain network explorer",
          "Direct communication line with the technical team",
        ],
      },
      {
        tier: "Ally",
        tierKey: "ally",
        benefits: [
          "Roadmap voting power",
          "Network-specific features in the dedicated network explorer",
        ],
      },
    ],
  },
  {
    id: "apps",
    name: "Crypto Apps",
    basePrice: 1000,
    description:
      "Dedicated listing and verified branding for wallets, dApps, supplementary explorer tools, and exchanges, promoting integration and visibility.",
    tiers: [
      {
        tier: "Backer",
        tierKey: "backer",
        benefits: [
          "Simple profile page",
          "Important contracts verified and tagged",
          "Contract events listing",
        ],
      },
      {
        tier: "Partner",
        tierKey: "partner",
        benefits: [
          "OpenScan subdomain",
          "Complete profile page with markdown description",
        ],
      },
      {
        tier: "Ally",
        tierKey: "ally",
        benefits: [
          "Roadmap voting power",
          "Direct communication line with the technical team",
        ],
      },
    ],
  },
  {
    id: "companies",
    name: "Companies & Orgs",
    basePrice: 500,
    description:
      "Formal recognition and visibility for infrastructure providers, venture funds, and other supporting entities who contribute to the project's continuity.",
    tiers: [
      {
        tier: "Backer",
        tierKey: "backer",
        benefits: [
          "Simple profile page",
          "Important contracts verified and tagged",
          "Contract events listing",
        ],
      },
      {
        tier: "Partner",
        tierKey: "partner",
        benefits: [
          "Complete profile page with markdown description",
          "OpenScan subdomain",
        ],
      },
      {
        tier: "Ally",
        tierKey: "ally",
        benefits: [
          "Direct communication line with the technical team",
          "Roadmap voting power",
        ],
      },
    ],
  },
]

export default function SubscriptionsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<SubscriptionCategory>("tokens")

  const selectedSubscription = useMemo(
    () =>
      subscriptionTypes.find((subscription) => subscription.id === selectedCategory) ??
      subscriptionTypes[0],
    [selectedCategory]
  )

  return (
    <div className="prose">
      <PageHeader
        title="Support OpenScan"
        description="Sustainable, ethical funding for open-source blockchain infrastructure."
      />

      <h2 id="plans">Subscription Plans</h2>

      <div className="not-prose mb-5">
        <Tabs
          value={selectedCategory}
          onValueChange={(value) =>
            setSelectedCategory(value as SubscriptionCategory)
          }
        >
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4">
            {subscriptionTypes.map((subscription) => (
              <TabsTrigger
                key={subscription.id}
                value={subscription.id}
                className="h-10 border border-accent/30 bg-accent/10 text-accent data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                {subscription.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <p className="not-prose mb-8 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        {selectedSubscription.description}
      </p>

      <div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
        {selectedSubscription.tiers.map((tier, index) => {
          const multiplier = tierMultipliers[tier.tier]
          const monthlyPrice = selectedSubscription.basePrice * multiplier
          const annualPrice = monthlyPrice * 12 * 0.8
          const inheritedTier =
            tier.tierKey === "ally"
              ? "Partner"
              : tier.tierKey === "partner"
                ? "Backer"
                : null

          return (
            <Card
              key={tier.tierKey}
              className={cn(
                "gap-4 py-5",
                tier.tierKey === "partner" && "border-accent/40 bg-accent/5",
                tier.tierKey === "ally" && "border-chart-4/40 bg-chart-4/5"
              )}
            >
              <CardHeader className="gap-3 pb-0">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle
                    className={cn("text-base", tier.tierKey === "ally" && "text-chart-4")}
                  >
                    Tier {index + 1} - {tier.tier}
                  </CardTitle>
                  <Badge variant="outline" className="border-border/70 text-muted-foreground">
                    {multiplier}x
                  </Badge>
                </div>

                <div>
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    ${monthlyPrice.toLocaleString()}
                    <span className="ml-1 text-sm font-medium text-muted-foreground">
                      / month
                    </span>
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      ${annualPrice.toLocaleString()} / year
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] uppercase tracking-wide",
                        tier.tierKey === "ally"
                          ? "border-chart-4/40 text-chart-4"
                          : "border-accent/40 text-accent"
                      )}
                    >
                      Save 20%
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <FeatureList>
                  {tier.benefits.map((benefit) => (
                    <FeatureListItem
                      key={`${tier.tierKey}-${benefit}`}
                      markerClassName={tier.tierKey === "ally" ? "bg-chart-4" : undefined}
                    >
                      {benefit}
                    </FeatureListItem>
                  ))}
                </FeatureList>
              </CardContent>

              {inheritedTier && (
                <CardFooter className="justify-center pb-5 pt-0 text-xs italic text-muted-foreground">
                  Includes all {inheritedTier} benefits
                </CardFooter>
              )}
            </Card>
          )
        })}
      </div>

      <h2 id="pricing-overview">Pricing Overview</h2>
      <div className="not-prose mb-10">
        <Card className="overflow-hidden py-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-accent/10 hover:bg-accent/10">
                  <TableHead className="px-4 py-3 text-left text-accent">
                    Subscription Type
                  </TableHead>
                  <TableHead className="px-4 py-3 text-center text-accent">
                    Backer (1x)
                  </TableHead>
                  <TableHead className="px-4 py-3 text-center text-accent">
                    Partner (3x)
                  </TableHead>
                  <TableHead className="px-4 py-3 text-center text-accent">
                    Ally (6x)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptionTypes.map((subscription) => (
                  <TableRow key={subscription.id}>
                    <TableCell className="whitespace-normal px-4 py-3 font-semibold text-foreground">
                      {subscription.name}
                    </TableCell>
                    {tierOrder.map((tier) => {
                      const monthlyPrice = subscription.basePrice * tierMultipliers[tier]
                      const annualPrice = monthlyPrice * 12 * 0.8

                      return (
                        <TableCell
                          key={`${subscription.id}-${tier}`}
                          className="px-4 py-3 text-center align-top"
                        >
                          <p className="text-sm font-semibold text-foreground">
                            ${monthlyPrice.toLocaleString()}/mo
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ${annualPrice.toLocaleString()}/yr
                          </p>
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <h2 id="roadmap-planning">Shared Roadmap Planning</h2>
      <p>
        Ally-tier subscribers gain voting power in our bi-annual roadmap planning
        sessions, where the OpenScan team and Allies collaborate to shape the
        future of the platform.
      </p>
      <div className="not-prose mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard
          title="Feature Prioritization"
          description="Vote on which features and improvements get developed next based on community needs."
          icon={<Vote className="h-5 w-5" />}
        />
        <InfoCard
          title="Network Expansion"
          description="Help decide which blockchain networks OpenScan should support and integrate."
          icon={<Network className="h-5 w-5" />}
        />
        <InfoCard
          title="Strategic Direction"
          description="Participate in discussions about OpenScan's long-term vision and technical direction."
          icon={<Compass className="h-5 w-5" />}
        />
      </div>

      <StepSection
        title="How to Subscribe"
        steps={[
          {
            title: "Submit Pull Request",
            description: (
              <>
                Create a pull request to the{" "}
                <a
                  href={SUBSCRIPTION_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  explorer-metadata
                </a>{" "}
                repository with your project information and subscription details.
              </>
            ),
          },
          {
            title: "PR Review & Approval",
            description:
              "The OpenScan team will review your pull request to verify eligibility and ensure all required information is provided.",
          },
          {
            title: "Make Payment & Prove Ownership",
            description: (
              <>
                Once your PR is approved, send the subscription payment on
                Ethereum Mainnet. Then use the{" "}
                <a
                  href={DEVTOOLS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  OpenScan Devtools
                </a>{" "}
                to sign the payment transaction hash and share it on your PR to
                prove ownership.
              </>
            ),
          },
          {
            title: "Subscription Activated",
            description:
              "After payment and signature verification, your PR will be merged and your subscription benefits will be activated immediately.",
          },
        ]}
      />

      <div className="not-prose rounded-xl border border-accent/30 bg-accent/5 p-6 mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1.5">
              Payment Address
            </h3>
            <p className="text-sm text-muted-foreground">
              All subscription payments are sent directly to the OpenScan DAO
              address:{" "}
              <a
                href={DAO_ADDRESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-semibold text-accent underline underline-offset-2"
              >
                {OPENSCAN_DAO_ADDRESS}
              </a>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={SUBSCRIPTION_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-4 py-2 text-sm font-semibold !text-slate-950 !no-underline hover:!text-slate-950 hover:!no-underline hover:bg-accent/90 !opacity-100 hover:!opacity-100 transition-colors"
            >
              Submit Subscription PR
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={DAO_ADDRESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-background px-4 py-2 text-sm font-semibold !text-foreground !no-underline hover:!text-foreground hover:!no-underline hover:bg-secondary !opacity-100 hover:!opacity-100 transition-colors"
            >
              Payment Address
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <p className="not-prose text-center text-sm text-muted-foreground">
        All revenue is reinvested solely for the platform&apos;s continuous
        development, growth, and infrastructural improvement.
      </p>
    </div>
  )
}
