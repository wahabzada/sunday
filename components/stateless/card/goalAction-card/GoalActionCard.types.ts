import { GoalActionType } from "models/base/goal/goal-action/goalAction.types"
import { GoalMemberType } from "models/base/goal/goal-member/goalMember.types"

export interface GoalActionCardProps {
  action: GoalActionType
  actionOwner?: GoalMemberType
}
