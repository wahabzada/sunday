import { Transition } from "@headlessui/react"
import { Fragment } from "react"
import { XCircleIcon } from "../icon/icons/Icons"
import { AlertProps } from "./Alert.types"

export const Alert: React.FC<AlertProps> = (alert) => {
  let alertBackground = "mx-auto max-w-sm rounded-full py-2 pl-4 pr-2"
  let closeIconColor = "ml-2"

  switch (alert.type) {
    case "info":
      alertBackground += " bg-blue-50"
      closeIconColor += " text-blue-500 active:text-blue-600"
      break
    case "success":
      alertBackground += " bg-green-50"
      closeIconColor += " text-green-500 active:text-green-600"
      break
    case "warning":
      alertBackground += " bg-orange-50"
      closeIconColor += " text-orange-500 active:text-orange-600"
      break
    case "danger":
      alertBackground += " bg-red-50"
      closeIconColor += " text-red-500 active:text-red-600"
      break
    default:
      alertBackground += " bg-gray-100"
      closeIconColor += " text-gray-500 active:text-gray-600"
  }

  return (
    <Transition.Root show={alert.show} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={alertBackground}>
            <div className="flex">
              <span className="flex-1 text-md text-gray-600">
                {alert.message}{" "}
              </span>

              <button onClick={alert.onClose} className={closeIconColor}>
                <XCircleIcon className="justify-self-center m-auto w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition.Root>
  )
}
