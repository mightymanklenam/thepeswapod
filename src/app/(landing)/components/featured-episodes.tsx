import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getEpisodes } from "@/lib/podcast";
import { Clock, TrendingUp } from "lucide-react";

export default async function FeaturedEpisodes() {
  const episodes = await getEpisodes();
  const featuredEpisodes = episodes.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most Recent Episodes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the conversations that have inspired millions of entrepreneurs across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode) => (
              <div 
                key={episode.id} 
                className="group relative bg-background rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <Image
                    src={episode.coverImage}
                    alt={episode.title}
                    className="w-full h-48 object-cover"
                    width={400}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                      Episode {episode.episodeNumber}
                    </div>
                  </div>
                  {episode.downloads && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {episode.downloads}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    {episode.duration}
                    <span className="text-muted-foreground/50">•</span>
                    {new Date(episode.publishDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>

                  {/* <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {episode.description}
                  </p> */}


                  <div className="flex flex-wrap gap-1 mt-3 mb-4">
                    {episode.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t">
                    <span className="text-xs text-muted-foreground">Listen:</span>
                    <div className="flex gap-2">
                      {episode.links.spotify && (
                        <a
                          href={episode.links.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:text-green-600 transition-colors"
                          title="Listen on Spotify"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m4.062 14.456c-.163.268-.524.353-.792.19c-2.168-1.324-4.9-1.624-8.115-.89c-.294.067-.59-.117-.656-.412s.117-.59.412-.656c3.506-.801 6.529-.464 8.96 1.025c.268.163.354.525.19.793m1.132-2.518c-.204.334-.639.439-.973.235c-2.482-1.526-6.266-1.967-9.198-1.076c-.356.108-.733-.092-.84-.449c-.108-.356.092-.733.449-.84c3.354-1.02 7.522-.53 10.327 1.157c.334.204.439.639.235.973m.098-2.622c-2.978-1.769-7.895-1.932-10.74-1.069c-.427.13-.879-.11-1.009-.537s.11-.879.537-1.009c3.282-.996 8.714-.804 12.155 1.236c.398.236.528.75.292 1.148s-.75.528-1.148.292z" />
                          </svg>
                        </a>
                      )}
                      {episode.links.apple && (
                        <a
                          href={episode.links.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-600 transition-colors"
                          title="Listen on Apple Podcasts"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.99 2C6.472 2 2 6.477 2 12.007c0 5.531 4.472 10.007 9.99 10.007s9.99-4.476 9.99-10.007C21.98 6.477 17.508 2 11.99 2M12 9.74c1.463 0 2.654 1.191 2.654 2.654v4.872c0 1.463-1.191 2.654-2.654 2.654s-2.654-1.191-2.654-2.654v-4.872c0-1.463 1.191-2.654 2.654-2.654m0-1.48c-2.274 0-4.134 1.86-4.134 4.134v4.872c0 2.274 1.86 4.134 4.134 4.134s4.134-1.86 4.134-4.134v-4.872c0-2.274-1.86-4.134-4.134-4.134m0-1.481c.9 0 1.634-.733 1.634-1.634S12.9 3.511 12 3.511s-1.634.733-1.634 1.634S11.1 6.779 12 6.779" />
                          </svg>
                        </a>
                      )}
                      {episode.links.youtube && episode.links.youtube !== '' && (
                        <a
                          href={episode.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-red-600 transition-colors"
                          title="Watch on YouTube"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/episodes">
                View All Episodes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}