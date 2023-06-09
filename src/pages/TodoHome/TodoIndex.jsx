import { Outlet } from "react-router-dom";

//  components
import TodoHomeSidebar from "./TodoHomeSidebar";
import TodoHomeBottomMobileNav from "./TodoHomeBottomMobileNav";

const HomeIndex = () => {
  return (
    <main>
      <div className=" flex-col justify-between">
        <div className="flex">
          <TodoHomeSidebar />
          {/* outlets */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>

      {/*  bottom area mobile nav  */}
      <TodoHomeBottomMobileNav />
    </main>
  );
};

export default HomeIndex;
