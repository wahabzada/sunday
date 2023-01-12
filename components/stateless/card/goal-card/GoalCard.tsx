import { AvatarGroup } from "components/stateless/avatar/avatar-group/AvatarGroup"
import { GoalCardProps } from "./GoalCard.types"

export const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className="rounded-xl border-0 p-3 flex-col space-y-5 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      {goal.name && (
        <h1 className="text-xl text-gray-600 font-['Roboto']">{goal.name}</h1>
      )}

      {goal.team.length && <AvatarGroup avatars={goal.team} limit={3} />}
    </div>
  )
}
