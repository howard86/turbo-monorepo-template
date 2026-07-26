import {
  ArchiveBoxArrowDownIcon,
  BeakerIcon,
  BriefcaseIcon,
  CursorArrowRaysIcon,
  FunnelIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import { Card, type CardProps } from "@org/core";

const features: CardProps[] = [
  {
    description:
      "Turborepo is a high-performance build system for JavaScript and TypeScript codebases.",
    href: "https://turbo.build/repo",
    Icon: ServerStackIcon,
    name: "Turborepo",
  },
  {
    description:
      "Bun is a fast JavaScript runtime, package manager, and test runner.",
    href: "https://bun.sh/",
    Icon: ArchiveBoxArrowDownIcon,
    name: "Bun",
  },
  {
    description:
      "Next.js gives you the best developer experience of React for production.",
    href: "https://nextjs.org/",
    Icon: BriefcaseIcon,
    name: "Next.js",
  },
  {
    description:
      "Rapidly build modern websites without ever leaving your HTML.",
    href: "https://tailwindcss.com/",
    Icon: CursorArrowRaysIcon,
    name: "Tailwindcss",
  },
  {
    description:
      "Ultracite provides fast, opinionated formatting and linting with Biome.",
    href: "https://www.ultracite.ai/",
    Icon: FunnelIcon,
    name: "Ultracite",
  },
  {
    description:
      "Bun Test is a fast test runner built directly into the Bun runtime.",
    href: "https://bun.sh/docs/test",
    Icon: BeakerIcon,
    name: "Bun Test",
  },
];

export default function Example() {
  return (
    <main className="bg-brand/50">
      {/* Feature section with grid */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="bg-gradient-to-r from-pink-500 to-indigo-800 bg-clip-text font-bold text-4xl text-transparent">
            Turbo Monorepo Template
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-gray-500 text-xl">
            Batteries-included tooling to bootstrap a monorepo
          </p>
          <section className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                description={feature.description}
                href={feature.href}
                Icon={feature.Icon}
                key={feature.name}
                name={feature.name}
              />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
