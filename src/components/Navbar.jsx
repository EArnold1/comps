import { Disclosure } from '@headlessui/react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <div className="w-full mx-auto mb-24">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="w-full flex justify-between bg-slate-700 py-1 md:py-3 px-5 gap-x-3">
              <p className="font-bold text-xl p-2 text-cyan-500">EVABILLS</p>
              <div className="hidden lg:flex w-full justify-between text-white font-bold">
                <div className="flex gap-x-2">
                  <p className="p-2 bg-slate-900 rounded-lg">Dashboard</p>
                  <p className="p-2 hover:bg-slate-900 rounded-lg">Team</p>
                  <p className="p-2 hover:bg-slate-900 rounded-lg">Projects</p>
                  <p className="p-2 hover:bg-slate-900 rounded-lg">Tools</p>
                </div>
                <div className="flex gap-x-2">
                  <p className="bg-red-500 p-2 rounded-lg">sign out</p>
                </div>
              </div>
              <Disclosure.Button className="">
                {/* close/open icon */}
                {open ? (
                  <XIcon className="h-10 w-8 text-white lg:hidden" />
                ) : (
                  <MenuAlt3Icon className="h-10 w-8 text-white lg:hidden" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="text-gray text-sm bg-slate-700 rounded-b-lg py-3 px-2 lg:hidden">
              <div className="flex flex-col w-full justify-between text-white text-lg font-semibold gap-y-2">
                <div className="flex flex-col gap-y-2">
                  <p className="px-3 py-3 bg-slate-900 rounded-lg">Dashboard</p>
                  <p className="px-3 py-3 hover:bg-slate-900 rounded-lg">
                    Team
                  </p>
                  <p className="px-3 py-3 hover:bg-slate-900 rounded-lg">
                    Projects
                  </p>
                  <p className="px-3 py-3 hover:bg-slate-900 rounded-lg">
                    Tools
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p className="bg-red-500 px-2 py-1 rounded-lg">sign out</p>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
