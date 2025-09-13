import { Button } from "@/components/ui/button";
import { Play, Users, Award, TrendingUp, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "50K+", label: "Total Downloads", icon: TrendingUp },
    { number: "50+", label: "Episodes Published", icon: Play },
    { number: "150+", label: "Business Leaders", icon: Users },
    { number: "20+", label: "Countries Reached", icon: Award },
  ];

  const values = [
    {
      title: "Authentic Storytelling",
      description:
        "We believe in the power of real, unfiltered stories that inspire and educate the next generation of African entrepreneurs.",
    },
    {
      title: "Community Building",
      description:
        "More than a podcast, we're fostering a pan-African network of ambitious business leaders and innovators.",
    },
    {
      title: "Impact-Driven",
      description:
        "Every conversation is designed to provide actionable insights that listeners can implement in their own entrepreneurial journeys.",
    },
  ];

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Amplifying African
              <span className="block text-primary">Entrepreneurship</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The Peswa Podcast is an unfiltered journey into the remarkable
              stories of entrepreneurs, business leaders, and innovators who are
              shaping Africa&apos;s economic future.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-20">
            <Image
              className="rounded-2xl w-full h-64 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="/DSC_2414.JPG"
              alt="African business leaders in conversation"
              height={1600}
              width={2826}
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Africa is experiencing an entrepreneurial renaissance, with
                  innovative leaders building world-class companies that solve
                  real problems and create meaningful impact.
                </p>
                <p>
                  The Peswa Podcast exists to capture these stories, share the
                  lessons learned, and inspire the next generation of African
                  entrepreneurs to dream bigger and act bolder.
                </p>
                <p>
                  Through deep, authentic conversations, we reveal the mindset
                  shifts, strategic decisions, and pivotal moments that separate
                  successful entrepreneurs from the rest.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <Quote className="w-12 h-12 text-primary mb-4" />
              <blockquote className="text-lg italic mb-4">
                &ldquo;Every entrepreneur has a story worth telling, and every
                story has lessons worth learning. Our mission is to bridge that
                gap.&rdquo;
              </blockquote>
              <div className="text-sm text-muted-foreground">
                - The Peswa Podcast Team
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Deep Dive Conversations
                </h3>
                <p className="text-muted-foreground mb-6">
                  We go beyond surface-level success stories to explore the
                  failures, pivots, and breakthrough moments that truly shaped
                  our guests&apos; journeys.
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Pan-African Focus
                </h3>
                <p className="text-muted-foreground">
                  From Lagos to Cape Town, Nairobi to Casablanca, we celebrate
                  the diversity and dynamism of entrepreneurship across the
                  entire continent.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Actionable Insights
                </h3>
                <p className="text-muted-foreground mb-6">
                  Every episode is designed to provide practical takeaways that
                  listeners can immediately apply to their own ventures and
                  careers.
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Community Building
                </h3>
                <p className="text-muted-foreground">
                  We&apos;re not just creating content; we&apos;re building a
                  network of like-minded individuals who support each
                  other&apos;s success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Support the Podcast
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a seasoned entrepreneur, aspiring business
              leader, or simply passionate about Africa&apos;s economic
              transformation, there&apos;s a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://www.buzzsprout.com/2423582/support">Support Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href={"/contact"}> Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
