import Image, { type ImageProps } from 'next/image'
import logoChinUse from '@/assets/logo/logochinuse.png'

type LogoProps = Omit<ImageProps, 'src' | 'alt'> & {
  alt?: string
}

export default function Logo({ alt = 'Ching Ling Logo', ...props }: LogoProps) {
  return <Image src={logoChinUse} alt={alt} {...props} />
}
