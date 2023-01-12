import { colorType } from "components/stateless/theme/Theme.types"

export interface ConfirmationModalProps {
  show: boolean
  onClose: (event: React.MouseEvent) => void
  ctaButtonLabel: string
  title?: string
  description?: string
  cancelButton?: boolean
  onClick?: () => void
  type?: colorType
  disabled?: boolean
  loading?: boolean
  icon?: JSX.Element
}
