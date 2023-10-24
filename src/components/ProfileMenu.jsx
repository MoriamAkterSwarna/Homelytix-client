import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const ProfileMenu = () => {
  return (
    // <Transition
    //   as={Fragment}
    //   enter="transition ease-out duration-100"
    //   enterFrom="transform opacity-0 scale-95"
    //   enterTo="transform opacity-100 scale-100"
    //   leave="transition ease-in duration-75"
    //   leaveFrom="transform opacity-100 scale-100"
    //   leaveTo="transform opacity-0 scale-95">
    //   <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 sm:block">
    //     <div className="px-1 py-1 z-20">
    //       <Menu.Item>
    //         {({ active }) => (
    //           <button
    //             className={`${
    //               active ? "bg-blue-500 text-white" : "text-gray-700"
    //             } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //             <CgProfile className="h-6 w-6 mr-2 "></CgProfile>
    //             My Profile
    //           </button>
    //         )}
    //       </Menu.Item>
    //     </div>
    //     <div className="px-1 py-1 z-30">
    //       <Menu.Item>
    //         {({ active }) => (
    //           <button
    //             className={`${
    //               active ? "bg-blue-500 text-white" : "text-gray-900"
    //             } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //             <FaListUl className="h-6 w-6 mr-2 "></FaListUl>
    //             Your Item
    //           </button>
    //         )}
    //       </Menu.Item>
    //     </div>
    //     <div className="px-1 py-1 z-40">
    //       <Menu.Item>
    //         {({ active }) => (
    //           <button
    //             className={`${
    //               active ? "bg-blue-500 text-white" : "text-gray-700"
    //             } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //             <RiLogoutCircleRLine className="h-6 w-6 mr-2 "></RiLogoutCircleRLine>
    //             Sign Out
    //           </button>
    //         )}
    //       </Menu.Item>
    //     </div>
    //   </Menu.Items>
    // </Transition>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95">
      <Menu.Items className="absolute lg:right-4 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                <CgProfile className="h-6 w-6 mr-2"></CgProfile>
                My Profile
              </button>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                <FaListUl className="h-6 w-6 mr-2"></FaListUl>
                Your Item
              </button>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                <RiLogoutCircleRLine className="h-6 w-6 mr-2"></RiLogoutCircleRLine>
                Sign Out
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
};
