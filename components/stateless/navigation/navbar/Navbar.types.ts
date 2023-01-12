import { UserType } from "models/base/user/user.types"

export interface NavBarProps {
  user: UserType
  signOutUser: (event: React.MouseEvent) => void
}
