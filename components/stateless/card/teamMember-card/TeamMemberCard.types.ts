import { DropdownOptionType } from "components/stateless/navigation/dropdown/Dropdown.types"
import { GoalMemberType } from "models/base/goal/goal-member/goalMember.types"
import { UserType } from "models/base/user/user.types"

export interface TeamMemberCardProps {
  member: GoalMemberType
  userIsGoalOwner: boolean
  user: UserType
  options: Array<DropdownOptionType>
}
