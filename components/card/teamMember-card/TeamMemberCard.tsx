import { AvatarPlaceholder } from "components/stateless/avatar/avatar-placeholder/AvatarPlaceholder"
import { OptimisedImage } from "components/stateless/image/Image"
import { Dropdown } from "components/stateless/navigation/dropdown/Dropdown"
import { GoalMemberRole } from "models/base/goal/goal-member/goalMember.types"
import { firebaseDateService } from "models/helper/date/firebaseDateService"
import { TeamMemberCardProps } from "./TeamMemberCard.types"

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  userIsGoalOwner,
  options,
  user,
}) => {
  const { getMonthAndYear } = firebaseDateService

  return (
    <div className="flex space-x-3 rounded-xl ease-in-out">
      {member.photo ? (
        <OptimisedImage
          className={"h-10 w-10 rounded-full ring-2 ring-gray-100"}
          src={member.photo}
          alt="profile photo"
          size={40}
        />
      ) : (
        <AvatarPlaceholder label={member.name ? member.name : ""} />
      )}

      <span className="self-center leading-tight text-gray-600 flex-1">
        {member.name}{" "}
        {member.createdDate && (
          <>
            <br />
            <span className="text-sm text-gray-400 font-light">
              Since {getMonthAndYear(member.createdDate)}
            </span>
          </>
        )}
      </span>

      <div className="self-center">
        <Dropdown
          label={
            member.role && member.role === GoalMemberRole.OWNER
              ? "Owner"
              : "Member"
          }
          type="tab"
          options={options}
          disabled={!userIsGoalOwner || member.id === user.id}
        />
      </div>
    </div>
  )
}
