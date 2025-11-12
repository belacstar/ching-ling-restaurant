import Hero from '@/components/Hero'
import Destaques from '@/components/Destaques'
import ImageCarousel from '@/components/ImageCarousel'
import ExperienciaSection from '@/components/ExperienciaSection'
import CardapioChines from '@/components/CardapioChines'
import CardapioJapones from '@/components/CardapioJapones'
import CardapioBebidas from '@/components/CardapioBebidas'

function MenuDivider() {
  return (
    <div className="mx-auto my-2 w-full max-w-5xl" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CardapioChines />
      <MenuDivider />
      <CardapioJapones />
      <MenuDivider />
      <CardapioBebidas />
      <Destaques />
      <ImageCarousel />
      <ExperienciaSection />
    </main>
  );
}
