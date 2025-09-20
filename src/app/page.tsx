import Hero from '@/components/Hero'
import Destaques from '@/components/Destaques'
import ImageCarousel from '@/components/ImageCarousel'
import ExperienciaSection from '@/components/ExperienciaSection'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Destaques />
      <ImageCarousel />
      <ExperienciaSection />
    </main>
  );
}
