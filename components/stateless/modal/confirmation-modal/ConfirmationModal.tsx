import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "components/stateless/button/Button"
import { ConfirmationModalProps } from "./ConfirmationModal.types"
import {
  DangerIcon,
  InfoIcon,
  CheckIcon,
  WarningIcon,
} from "components/stateless/icon/icons/Icons"

export const ConfirmationModal: React.FC<ConfirmationModalProps> = (modal) => {
  return (
    <Transition.Root show={modal.show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        //initialFocus={cancelButtonRef}
        onClose={modal.onClose as VoidFunction}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {modal.type === "danger" && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <DangerIcon className="w-6 h-6 text-red-600" />
                      </div>
                    )}

                    {modal.type === "success" && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckIcon className="w-6 h-6 text-green-600" />
                      </div>
                    )}

                    {modal.type === "info" && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InfoIcon className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    {modal.type === "warning" && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                        <WarningIcon className="w-6 h-6 text-orange-600" />
                      </div>
                    )}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {modal.title && (
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {modal.title}
                        </Dialog.Title>
                      )}

                      {modal.description && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {modal.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-center sm:justify-end">
                  {modal.cancelButton && (
                    <div className="mx-2">
                      <Button
                        label="Cancel"
                        onClick={modal.onClose}
                        variant={"outlined"}
                        size={"small"}
                        type={"default"}
                      />
                    </div>
                  )}

                  {modal.onClick && (
                    <div className="mx-2">
                      <Button
                        onClick={modal.onClick}
                        label={modal.ctaButtonLabel}
                        variant={"contained"}
                        size={"small"}
                        type={modal.type ? modal.type : "default"}
                        loading={modal.loading}
                        disabled={modal.disabled}
                        icon={modal.icon}
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
