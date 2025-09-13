import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

export default function ContactSuccess() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank you for reaching out!
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              We&apos;ve received your submission and our team will review it
              carefully.
            </p>
            <p className="text-muted-foreground">
              We typically respond within 2-3 business days. In the meantime,
              feel free to explore our latest episodes or connect with us on
              social media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/episodes" className="gap-2">
                <Home className="w-4 h-4" />
                Browse Episodes
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
