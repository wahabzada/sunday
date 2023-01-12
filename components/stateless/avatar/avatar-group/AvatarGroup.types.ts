import { GoalMemberType } from "models/base/goal/goal-member/goalMember.types"

export interface AvatarGroupProps {
  avatars: [GoalMemberType]
  limit?: number
}
