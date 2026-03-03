import type { Metadata } from "next"
import { PageHeader } from "@/components/docs-components"

export const metadata: Metadata = {
  title: "Welcome to OpenScan",
  description:
    "Welcome to OpenScan — open-source blockchain explorer and infrastructure.",
}

export default function WelcomePage() {
  return (
    <div className="prose">
      <PageHeader
        title="Welcome to OpenScan"
        description="Open-source blockchain explorer and infrastructure."
      />

      <p>
        Welcome to the OpenScan documentation. Here you&apos;ll find everything
        you need to get started with the OpenScan stack.
      </p>
    </div>
  )
}
