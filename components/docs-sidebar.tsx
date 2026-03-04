"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  FileText,
  GitCompare,
  Puzzle,
  Menu,
  X,
  Network,
  Compass,
  Sparkles,
  Wrench,
  ChevronRight,
  HelpCircle,
  BookOpen,
  Heart,
} from "lucide-react"
import { useState } from "react"

type NavItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: { title: string; href: string }[]
}

type NavSection = {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "Welcome to OpenScan", href: "/welcome", icon: BookOpen },
      { title: "Values", href: "/values", icon: Heart },
    ],
  },
  {
    title: "Stack",
    items: [
      {
        title: "Explorer",
        href: "/explorer",
        icon: Compass,
        children: [
          { title: "Alpha Status", href: "/explorer/alpha-status" },
          { title: "How It Works", href: "/explorer/how-it-works" },
          { title: "Functionalities", href: "/explorer/functionalities" },
          { title: "Settings", href: "/explorer/settings" },
          { title: "Super User", href: "/explorer/super-user" },
        ],
      },
      { title: "Skills", href: "/skills", icon: Sparkles },
      { title: "Hardhat Plugin", href: "/hardhat-plugin", icon: Puzzle },
      { title: "Network Connectors", href: "/network-connectors", icon: Network },
      { title: "Metadata", href: "/metadata", icon: FileText },
      // { title: "Tools", href: "/tools", icon: Wrench },
    ],
  },
  {
    title: "More",
    items: [
      { title: "Tutorials", href: "/tutorials", icon: HelpCircle },
      // { title: "Comparison", href: "/comparison", icon: GitCompare },
      // { title: "FAQs", href: "/faqs", icon: HelpCircle },
    ],
  },
]

function NavItemLink({
  item,
  pathname,
  onLinkClick,
}: {
  item: NavItem
  pathname: string
  onLinkClick?: () => void
}) {
  const isActive = pathname === item.href
  const isChildActive = item.children?.some((child) => pathname === child.href)
  const [isOpen, setIsOpen] = useState(isActive || !!isChildActive)

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            "flex flex-1 items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
            isActive
              ? "bg-secondary text-foreground font-medium"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          )}
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                isOpen && "rotate-90"
              )}
            />
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <ul className="ml-6 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
          {item.children.map((child) => {
            const childActive = pathname === child.href
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onLinkClick}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors",
                    childActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {child.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6 py-4">
      {navigation.map((section) => (
        <div key={section.title}>
          <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {section.title}
          </h4>
          <ul className="flex flex-col gap-0.5">
            {section.items.map((item) => (
              <NavItemLink
                key={item.href}
                item={item}
                pathname={pathname}
                onLinkClick={onLinkClick}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function DocsSidebar() {
  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col border-r border-border">
      <div className="sticky top-0 flex h-full max-h-screen flex-col overflow-y-auto px-4 pb-8">
        <div className="flex h-14 items-center border-b border-border px-2">
          <Link href="/welcome" className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            <span className="font-semibold text-foreground tracking-tight">
              OpenScan Docs
            </span>
          </Link>
        </div>
        <SidebarContent />
      </div>
    </aside>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        <Link href="/welcome" className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-accent" />
          <span className="font-semibold text-foreground tracking-tight">
            OpenScan Docs
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-4">
          <SidebarContent onLinkClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}
