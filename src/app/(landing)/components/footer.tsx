import Link from "next/link";
import { Logo } from "./logo";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Episodes",
    href: "/episodes",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l?si=AnAQXs5kS2OZiTjJ-izaTA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m4.062 14.456c-.163.268-.524.353-.792.19c-2.168-1.324-4.9-1.624-8.115-.89c-.294.067-.59-.117-.656-.412s.117-.59.412-.656c3.506-.801 6.529-.464 8.96 1.025c.268.163.354.525.19.793m1.132-2.518c-.204.334-.639.439-.973.235c-2.482-1.526-6.266-1.967-9.198-1.076c-.356.108-.733-.092-.84-.449c-.108-.356.092-.733.449-.84c3.354-1.02 7.522-.53 10.327 1.157c.334.204.439.639.235.973m.098-2.622c-2.978-1.769-7.895-1.932-10.74-1.069c-.427.13-.879-.11-1.009-.537s.11-.879.537-1.009c3.282-.996 8.714-.804 12.155 1.236c.398.236.528.75.292 1.148s-.75.528-1.148.292z"
              />
            </svg>
          </Link>
          <Link
            href="https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Podcasts"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.99 2C6.472 2 2 6.477 2 12.007c0 5.531 4.472 10.007 9.99 10.007s9.99-4.476 9.99-10.007C21.98 6.477 17.508 2 11.99 2M12 9.74c1.463 0 2.654 1.191 2.654 2.654v4.872c0 1.463-1.191 2.654-2.654 2.654s-2.654-1.191-2.654-2.654v-4.872c0-1.463 1.191-2.654 2.654-2.654m0-1.48c-2.274 0-4.134 1.86-4.134 4.134v4.872c0 2.274 1.86 4.134 4.134 4.134s4.134-1.86 4.134-4.134v-4.872c0-2.274-1.86-4.134-4.134-4.134m0-1.481c.9 0 1.634-.733 1.634-1.634S12.9 3.511 12 3.511s-1.634.733-1.634 1.634S11.1 6.779 12 6.779"
              />
            </svg>
          </Link>
          <Link
            href="https://twitter.com/thepeswa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/company/thepeswa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://instagram.com/thepeswa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} The Peswa Podcast, All rights reserved
        </span>
      </div>
    </footer>
  );
}
