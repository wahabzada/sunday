import { Button } from "components/stateless/button/Button"
import { AnnouncementProps } from "./Announcement.types"

export const Announcement: React.FC<AnnouncementProps> = (announcement) => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className="relative overflow-hidden rounded-full py-1 pl-4 pr-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <span className="text-gray-600">
          {announcement.label}{" "}
          <Button
            label={
              announcement.callToAction
                ? announcement.callToAction
                : "Read more"
            }
            onClick={announcement.onClick}
            variant="text"
            type="default"
            arrow={true}
          ></Button>
        </span>
      </div>
    </div>
  )
}
