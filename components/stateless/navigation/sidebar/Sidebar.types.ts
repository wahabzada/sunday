import { UserType } from "models/base/user/user.types"

export interface SidebarProps {
  user: UserType
  signOutUser: (event: React.MouseEvent) => void
}
