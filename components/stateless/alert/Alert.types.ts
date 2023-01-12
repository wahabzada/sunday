import { colorType } from "components//stateless/theme/Theme.types"

export interface AlertProps {
  message: string
  onClose: (event: React.MouseEvent) => void
  type?: colorType
  show: boolean
}
