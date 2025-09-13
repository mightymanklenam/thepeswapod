import { XMLParser } from "fast-xml-parser";
import { Episode } from "@/data/episodes";
import crypto from 'crypto';

const RSS_FEED_URL = "https://feeds.buzzsprout.com/2423582.rss";

// PodcastIndex.org API configuration
const PODCASTINDEX_API_KEY = process.env.PODCASTINDEX_API_KEY || '';
const PODCASTINDEX_API_SECRET = process.env.PODCASTINDEX_API_SECRET || '';
const PODCASTINDEX_BASE_URL = 'https://api.podcastindex.org/api/1.0';

function formatDuration(duration?: string | number): string {
  if (!duration) return "Unknown";

  const durationStr = duration.toString();

  // Handle HH:MM:SS format (already formatted)
  if (durationStr.includes(":")) {
    return durationStr;
  }

  // Handle seconds format (convert to minutes)
  const seconds = parseInt(durationStr);
  if (isNaN(seconds)) return "Unknown";

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  } else {
    return `${minutes} min`;
  }
}

interface RSSItem {
  title: string;
  description: string;
  "itunes:summary"?: string;
  "itunes:subtitle"?: string;
  "itunes:author"?: string;
  "itunes:duration"?: string;
  "itunes:episode"?: string;
  "itunes:image"?: { "@_href": string };
  image?: { url?: string; "@_href"?: string };
  pubDate: string;
  guid: { "#text": string };
  enclosure?: { "@_url": string };
  link?: string;
}

interface RSSChannel {
  title: string;
  description: string;
  "itunes:author"?: string;
  "itunes:image"?: { "@_href": string };
  item: RSSItem[];
}

interface RSSFeed {
  rss: {
    channel: RSSChannel;
  };
}

interface PodcastIndexEpisode {
  id: number;
  title: string;
  description?: string;
  duration?: number;
  datePublished: number;
  episode?: number;
  image?: string;
  feedImage?: string;
}

function parseEpisodeFromRSS(
  item: RSSItem,
  index: number,
  channelImage?: string
): Episode {
  const title = item.title || "Untitled Episode";
  let description = item["itunes:summary"] || item.description || "";
  
  // Remove "Send us a text" and similar promotional text
  description = description.replace(/Send us a text.*$/i, '').trim();
  description = description.replace(/Text us.*$/i, '').trim();
  description = description.replace(/Message us.*$/i, '').trim();
  
  const guest = extractGuestFromTitle(title);
  const duration = formatDuration(item["itunes:duration"]) || "Unknown";
  const episodeNumber = item["itunes:episode"]
    ? parseInt(item["itunes:episode"])
    : index + 1;
  const publishDate = new Date(item.pubDate).toISOString().split("T")[0];

  // Try to get episode-specific image, fall back to channel image, then default
  const coverImage =
    item["itunes:image"]?.["@_href"] ||
    item.image?.["@_href"] ||
    item.image?.url ||
    channelImage ||
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop";

  // Generate episode ID from GUID or title
  const id = item.guid?.["#text"]
    ? item.guid["#text"].split("/").pop()?.replace(/\D/g, "") ||
      (index + 1).toString()
    : (index + 1).toString();

  // Extract tags from title and description
  const tags = extractTags(title, description);

  // Remove download counts - will be added back when real analytics are available
  const downloads = "";

  return {
    id,
    title,
    description:
      description.length > 200
        ? description.substring(0, 200) + "..."
        : description,
    guest: guest.name,
    guestTitle: guest.title,
    duration,
    publishDate,
    episodeNumber,
    coverImage,
    tags,
    downloads,
    featured: index < 3, // Mark first 3 as featured
    links: {
      spotify: generateSpotifyLink(),
      apple: generateAppleLink(),
      youtube: generateYouTubeLink(),
    },
  };
}

function extractGuestFromTitle(title: string): { name: string; title: string } {
  // Simple heuristic to extract guest name from title
  // This is a basic implementation - you might want to improve this based on your title patterns
  const patterns = [
    /with\s+([^,:\-]+)/i,
    /featuring\s+([^,:\-]+)/i,
    /ft\.?\s+([^,:\-]+)/i,
  ];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match) {
      const name = match[1].trim();
      return {
        name,
        title: "Entrepreneur", // Default title - you might want to maintain a guest database
      };
    }
  }

  return {
    name: "Guest Speaker",
    title: "Entrepreneur",
  };
}

function extractTags(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase();
  const tagMap: Record<string, string[]> = {
    Technology: ["tech", "digital", "software", "ai", "startup"],
    Business: ["business", "entrepreneur", "company", "enterprise"],
    Leadership: ["leader", "leadership", "ceo", "founder"],
    Innovation: ["innovation", "creative", "disrupt"],
    Fintech: ["fintech", "finance", "payment", "banking"],
    Healthcare: ["health", "medical", "doctor"],
    Agriculture: ["farm", "agriculture", "food"],
    Education: ["education", "school", "learning"],
    Scaling: ["scale", "growth", "expand"],
    Investment: ["invest", "funding", "capital"],
  };

  const tags: string[] = [];
  for (const [tag, keywords] of Object.entries(tagMap)) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      tags.push(tag);
    }
  }

  return tags.length > 0 ? tags.slice(0, 3) : ["Business"]; // Max 3 tags, default to Business
}

function generateSpotifyLink(): string {
  // Always return main show link - users can find specific episodes from there
  return "https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l";
}

function generateAppleLink(): string {
  // Always return main show link - users can find specific episodes from there
  return "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541";
}

function generateYouTubeLink(): string {
  // Return main YouTube channel - users can find specific episodes from there
  return "https://www.youtube.com/@thepeswa";
}

// PodcastIndex.org API authentication
function createPodcastIndexHeaders() {
  if (!PODCASTINDEX_API_KEY || !PODCASTINDEX_API_SECRET) {
    throw new Error('PodcastIndex API credentials not configured');
  }
  
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const data4Hash = PODCASTINDEX_API_KEY + PODCASTINDEX_API_SECRET + apiHeaderTime;
  const hash = crypto.createHash('sha1').update(data4Hash).digest('hex');
  
  return {
    'User-Agent': 'ThePeswa/1.0',
    'X-Auth-Date': apiHeaderTime.toString(),
    'X-Auth-Key': PODCASTINDEX_API_KEY,
    'Authorization': hash,
  };
}

// Fetch episodes from PodcastIndex.org API
async function fetchEpisodesFromPodcastIndex(): Promise<Episode[]> {
  try {
    const headers = createPodcastIndexHeaders();
    const feedUrl = encodeURIComponent(RSS_FEED_URL);
    const url = `${PODCASTINDEX_BASE_URL}/episodes/byfeedurl?url=${feedUrl}&max=50`;
    
    const response = await fetch(url, { 
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`PodcastIndex API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.items || !Array.isArray(data.items)) {
      throw new Error('Invalid response format from PodcastIndex API');
    }
    
    // Convert PodcastIndex episodes to our Episode format
    const episodes = data.items.map((item: PodcastIndexEpisode, index: number) => {
      const title = item.title || 'Untitled Episode';
      let description = item.description || '';
      
      // Clean description - remove promotional text
      description = description.replace(/Send us a text.*$/i, '').trim();
      description = description.replace(/Text us.*$/i, '').trim();
      description = description.replace(/Message us.*$/i, '').trim();
      
      const guest = extractGuestFromTitle(title);
      const duration = formatDuration(item.duration);
      const publishDate = new Date(item.datePublished * 1000).toISOString().split('T')[0];
      
      return {
        id: item.id?.toString() || (index + 1).toString(),
        title,
        description: description.length > 200 ? description.substring(0, 200) + '...' : description,
        guest: guest.name,
        guestTitle: guest.title,
        duration,
        publishDate,
        episodeNumber: item.episode || (data.items.length - index),
        coverImage: item.image || item.feedImage || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop',
        tags: extractTags(title, description),
        downloads: '',
        featured: index < 3,
        links: {
          spotify: generateSpotifyLink(),
          apple: generateAppleLink(),
          youtube: generateYouTubeLink(),
        },
      };
    });
    
    return episodes;
  } catch (error) {
    console.error('Error fetching episodes from PodcastIndex:', error);
    throw error;
  }
}

export async function fetchEpisodesFromRSS(): Promise<Episode[]> {
  try {
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const xmlData = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });

    const result = parser.parse(xmlData) as RSSFeed;
    const channel = result.rss.channel;
    const items = channel.item || [];
    const channelImage = channel["itunes:image"]?.["@_href"];

    // Convert RSS items to Episode objects
    const episodes = items.map((item, index) =>
      parseEpisodeFromRSS(item, index, channelImage)
    );

    return episodes;
  } catch (error) {
    console.error("Error fetching episodes from RSS:", error);
    throw error;
  }
}

export async function getEpisodes(): Promise<Episode[]> {
  // Try PodcastIndex.org API first, fall back to RSS if it fails
  try {
    if (PODCASTINDEX_API_KEY && PODCASTINDEX_API_SECRET) {
      console.log('Fetching episodes from PodcastIndex.org...');
      return await fetchEpisodesFromPodcastIndex();
    } else {
      console.log('PodcastIndex credentials not found, using RSS feed...');
      return await fetchEpisodesFromRSS();
    }
  } catch (error) {
    console.error("Failed to fetch episodes from PodcastIndex, trying RSS fallback:", error);
    try {
      return await fetchEpisodesFromRSS();
    } catch (rssError) {
      console.error("Failed to fetch episodes from RSS, returning empty array:", rssError);
      return [];
    }
  }
}
