import { Button } from "components/stateless/button/Button"
import { OptimisedImage } from "components/stateless/image/Image"
import { AvatarPlaceholder } from "components/stateless/avatar/avatar-placeholder/AvatarPlaceholder"
import { SidebarProps } from "./Sidebar.types"
import { useRouter } from "next/router"
import { ChatIcon, HashtagIcon } from "components/stateless/icon/icons/Icons"

export const Sidebar: React.FC<SidebarProps> = (sidebar) => {
  const router = useRouter()
  return (
    <aside className="fixed h-screen flex bg-gray-50 w-28 py-10 px-5 z-10 flex-col justify-between space-y-5 shadow-sm">
      <div className="space-y-5">
        <Button
          label="Goals"
          variant={router.pathname === "/goals" ? "outlined" : "text"}
          icon={<HashtagIcon className="justify-self-center m-auto w-6 h-6" />}
          fullWidth={true}
          onClick={() => router.push("/goals")}
        />
        {/*<Button
          label="Chats"
          variant={router.pathname === "/chats" ? "outlined" : "text"}
          icon={<ChatIcon className="justify-self-center m-auto w-6 h-6" />}
          fullWidth={true}
          onClick={() => router.push("/chats")}
  /> */}
      </div>

      <div className="space-y-5">
        {/* <hr className="h-px bg-gray-200 border-0" /> */}
        <div className="flex justify-center">
          <button onClick={() => router.push("/profile")}>
            {sidebar.user.photo ? (
              <OptimisedImage
                className={
                  "h-10 w-10 rounded-full ring-4 ring-gray-50 hover:ring-gray-900/10"
                }
                src={sidebar.user.photo}
                alt="profile photo"
                size={40}
              />
            ) : (
              <AvatarPlaceholder
                label={sidebar.user.name ? sidebar.user.name : ""}
              />
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}
