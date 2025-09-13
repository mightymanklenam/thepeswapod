import { getEpisodes } from "@/lib/podcast";
import EpisodesClient from "./episodes-client";

export default async function Episodes() {
  const episodes = await getEpisodes();
  
  return <EpisodesClient episodes={episodes} />;
}