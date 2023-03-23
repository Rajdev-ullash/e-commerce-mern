import React, { Fragment } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Dropdown } from "flowbite-react";
const TopNav = () => {
  return (
    <Fragment>
      <div className="w-full bg-slate-50 font-Roboto text-gray-500 tracking-wide font-medium text-base">
        <div className="container mx-auto px-3 sm:px-32 py-4">
          <div className="flex flex-row items-center justify-between">
            <div>
              Need help? call us :{" "}
              <span className="hover hover:text-red-500">
                (+92) 0123 456 789
              </span>
            </div>
            <div className="hidden sm:visible">
              With warranty & free shipping for above $78.00
            </div>
            <div className="flex items-center">
              <div className="">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <div className="flex items-center">
                      <MdOutlineAccountCircle className="text-2xl text-gray-500" />
                      <span className="pl-2">Account</span>
                    </div>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
              {/* right straight line */}
              <div className="h-4 border-r-2 border-gray-400 mx-2"></div>

              <div className="flex items-center">
                {/* wishlist icon */}
                <div className="pr-2">
                  <AiOutlineHeart className="text-2xl text-gray-500" />
                </div>

                <div>Wishlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopNav;
