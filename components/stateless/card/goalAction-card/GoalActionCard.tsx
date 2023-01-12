import { AvatarPlaceholder } from "components/stateless/avatar/avatar-placeholder/AvatarPlaceholder"
import { OptimisedImage } from "components/stateless/image/Image"
import { GoalActionCardProps } from "./GoalActionCard.types"

export const GoalActionCard: React.FC<GoalActionCardProps> = ({
  action,
  actionOwner,
}) => {
  return (
    <button className="px-3 py-2 rounded-xl flex space-x-3 bg-gray-50 ease-in-out ring-1 ring-gray-900/10 hover:ring-gray-900/20 disabled:cursor-not-allowed">
      <span className="text-gray-600 flex-1 text-start self-center">
        {action.name}
      </span>
      {actionOwner?.photo ? (
        <OptimisedImage
          className={"h-8 w-8 rounded-full ring-2 ring-gray-100 self-center"}
          src={actionOwner.photo}
          alt="profile photo"
          size={40}
        />
      ) : (
        <AvatarPlaceholder
          size={8}
          label={actionOwner?.name ? actionOwner.name : ""}
        />
      )}
    </button>
  )
}
