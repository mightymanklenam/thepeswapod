import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, TwitterIcon as Twitter } from "lucide-react";

export default function MeetTheHost() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <Image
                  src="/bill.JPG"
                  alt="Bill Fosuhene Cobbinah - Host of The Peswa Podcast"
                  className="w-full h-96 lg:h-[500px] object-cover object-center rounded-2xl shadow-2xl"
                  width={1000}
                  height={750}
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Meet Your Host
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                  Bill Fosuhene Cobbinah
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Bill Fosuhene Cobbinah is a Ghanaian technology entrepreneur and storyteller. He is the Co-founder and Chief Executive Officer of Edanra, the rental-fintech marketplace that lets tenants pay rent monthly while quietly building a credit history—an approach that is reshaping Ghana&apos;s traditional year-in-advance rental culture.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Away from product dashboards, Bill amplifies founders&apos; voices as the creator and executive host of The Peswa Podcast, a weekly show dubbed &quot;the voice of African entrepreneurship.&quot; Each episode features long-form conversations that unpack the grit, failures and breakthroughs behind some of the continent&apos;s most innovative businesses.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://twitter.com/thepeswa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://instagram.com/thepeswa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://linkedin.com/company/thepeswa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}