import { IoHomeOutline, IoExit } from 'react-icons/io5';

import logo from '../assets/logo-large-transparent.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between	">
      <div className="w-40 h-40">
        <img
          className="w-full h-full object-cover"
          src={logo}
          alt="Future Reads logo"
        />
      </div>
      <div className="">
        <div>
          <IoHomeOutline />
          <span>Dashboard</span>
        </div>
      </div>
      <div className="">
        <div>
          <IoExit />
          <span>Sign-out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
