import { colorType } from "components/stateless/theme/Theme.types"

export interface ButtonProps {
  label: string
  onClick: (event: React.MouseEvent) => void
  variant?: "text" | "contained" | "outlined"
  size?: "small" | "medium" | "large"
  type?: colorType
  disabled?: boolean
  loading?: boolean
  icon?: JSX.Element
  arrow?: boolean
  fullWidth?: boolean
}
