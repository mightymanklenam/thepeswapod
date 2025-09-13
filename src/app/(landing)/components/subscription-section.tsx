import { Button } from "@/components/ui/button";

export default function SubscriptionSection() {
  const platforms = [
    {
      name: "Spotify",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m4.062 14.456c-.163.268-.524.353-.792.19c-2.168-1.324-4.9-1.624-8.115-.89c-.294.067-.59-.117-.656-.412s.117-.59.412-.656c3.506-.801 6.529-.464 8.96 1.025c.268.163.354.525.19.793m1.132-2.518c-.204.334-.639.439-.973.235c-2.482-1.526-6.266-1.967-9.198-1.076c-.356.108-.733-.092-.84-.449c-.108-.356.092-.733.449-.84c3.354-1.02 7.522-.53 10.327 1.157c.334.204.439.639.235.973m.098-2.622c-2.978-1.769-7.895-1.932-10.74-1.069c-.427.13-.879-.11-1.009-.537s.11-.879.537-1.009c3.282-.996 8.714-.804 12.155 1.236c.398.236.528.75.292 1.148s-.75.528-1.148.292z" />
        </svg>
      ),
      color: "bg-green-500 hover:bg-green-600",
      href: "https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l?si=AnAQXs5kS2OZiTjJ-izaTA",
    },
    {
      name: "Apple Podcasts",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.472 2 2 6.477 2 12.007c0 5.531 4.472 10.007 9.99 10.007s9.99-4.476 9.99-10.007C21.98 6.477 17.508 2 11.99 2M12 9.74c1.463 0 2.654 1.191 2.654 2.654v4.872c0 1.463-1.191 2.654-2.654 2.654s-2.654-1.191-2.654-2.654v-4.872c0-1.463 1.191-2.654 2.654-2.654m0-1.48c-2.274 0-4.134 1.86-4.134 4.134v4.872c0 2.274 1.86 4.134 4.134 4.134s4.134-1.86 4.134-4.134v-4.872c0-2.274-1.86-4.134-4.134-4.134m0-1.481c.9 0 1.634-.733 1.634-1.634S12.9 3.511 12 3.511s-1.634.733-1.634 1.634S11.1 6.779 12 6.779" />
        </svg>
      ),
      color: "bg-purple-500 hover:bg-purple-600",
      href: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" />
        </svg>
      ),
      color: "bg-red-500 hover:bg-red-600",
      href: "https://www.youtube.com/@thepeswa",
    },
  ];

  return (
    <section id="subscribe" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe on your favorite platform and get notified when new episodes drop
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                asChild
                className={`${platform.color} text-white border-0 h-14 flex-col gap-2`}
              >
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.icon}
                  <span className="text-xs font-medium">{platform.name}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Get Episode Notifications</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="h-12">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Join 50,000+ entrepreneurs getting weekly insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}