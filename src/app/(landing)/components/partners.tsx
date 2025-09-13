import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-4xl">
            Hear from Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Join Africa&apos;s leading business podcast and connect with
            influential entrepreneurs, decision-makers, and innovators across
            the continent. Amplify your brand&apos;s reach and impact in the
            African business ecosystem.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <span>Become a Partner</span>
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="https://www.buzzsprout.com/2423582/support">
                <span>Show your Support</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
