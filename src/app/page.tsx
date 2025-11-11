import Hero from '@/components/Hero'
import Destaques from '@/components/Destaques'
import ImageCarousel from '@/components/ImageCarousel'
import ExperienciaSection from '@/components/ExperienciaSection'
import CardapioChines from '@/components/CardapioChines'
import CardapioJapones from '@/components/CardapioJapones'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CardapioChines />
      <CardapioJapones />
      <Destaques />
      <ImageCarousel />
      <ExperienciaSection />
    </main>
  );
}
