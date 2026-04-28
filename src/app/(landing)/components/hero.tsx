import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
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

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            {/* Desktop image */}
            <Image
              src="/DSC_2414.JPG"
              alt="The Peswa Podcast Hero Background"
              fill
              className="object-cover hidden md:block"
              priority
              quality={85}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            {/* Mobile image */}
            <Image
              src="/marketplace.png"
              alt="The Peswa Podcast Hero Background"
              fill
              className="object-cover block md:hidden"
              priority
              quality={85}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-6xl font-bold md:text-7xl lg:text-8xl text-white"
              >
                The Peswa Podcast
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-4xl text-pretty text-xl md:text-2xl text-white/90"
              >
                Unfiltered conversations with Africa&apos;s most influential
                entrepreneurs, business leaders, and innovators. Real stories,
                actionable insights, and the mindset shifts that drive
                extraordinary success.
              </TextEffect>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

