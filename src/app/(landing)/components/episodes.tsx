import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { episodes, type Episode } from "@/data/episodes";
import { Clock, Download, ChevronRight } from "lucide-react";
import Image from "next/image";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function EpisodesSection() {
  const featuredEpisode = episodes.find(episode => episode.featured);
  const recentEpisodes = episodes.filter(episode => !episode.featured).slice(0, 4);

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-4xl font-semibold md:text-5xl"
          >
            Latest Episodes
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Deep conversations with Africa&apos;s most influential entrepreneurs and business leaders
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            },
            ...transitionVariants,
          }}
          className="space-y-12"
        >
          {/* Featured Episode */}
          {featuredEpisode && (
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative">
                  <Image
                    src={featuredEpisode.coverImage}
                    alt={featuredEpisode.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Episode {featuredEpisode.episodeNumber}</span>
                    <span>•</span>
                    <span>{new Date(featuredEpisode.publishDate).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {featuredEpisode.title}
                  </h3>
                </div>

                <p className="text-muted-foreground">
                  {featuredEpisode.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{featuredEpisode.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="size-4" />
                    <span>{featuredEpisode.downloads} downloads</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredEpisode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="lg">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Recent Episodes Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Recent Episodes</h3>
              <Button variant="outline" size="sm" className="gap-1">
                View All
                <ChevronRight className="size-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {recentEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="group bg-card border rounded-2xl overflow-hidden transition-all duration-300">
      <div className="relative">
        <Image
          src={episode.coverImage}
          alt={episode.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
            {episode.duration}
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Episode {episode.episodeNumber}</span>
            <span>•</span>
            <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
          </div>
          <h4 className="font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {episode.title}
          </h4>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {episode.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Download className="size-3" />
            <span>{episode.downloads}</span>
          </div>
          <div className="flex gap-1">
            {episode.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}