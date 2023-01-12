import { StaticImageData } from "next/image"

export interface ImageProps {
  src: string | StaticImageData
  alt: string
  className: string
  size: number
  priority?: boolean
}
