export interface DropdownProps {
  label: string | null
  type: "image" | "tab" | "placeholder"
  options: Array<DropdownOptionType>
  imgSrc?: string | null
  imgSize?: number
  imgAlt?: string
  imgClassName?: string
  disabled?: boolean
}

export type DropdownOptionType = {
  label: string
  onClick: (event: React.MouseEvent) => void
}
