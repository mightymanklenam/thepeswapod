import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <Image
          className="rounded-(--radius) grayscale"
          src="/DSC_2414.JPG"
          alt="African business leaders in conversation"
          height={1600}
          width={2826}
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            The Peswa ecosystem amplifies African entrepreneurship and
            innovation across the continent.
          </h2>
          <div className="space-y-6">
            <p>
              The Peswa is more than just a podcast. We&apos;re building a platform
              that connects Africa&apos;s most ambitious entrepreneurs, investors,
              and business leaders. Through deep conversations, actionable
              insights, and a growing community, we&apos;re fostering the next
              generation of African business excellence.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="/about">
                <span>Our Story</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
