import SearchBar from "./SearchBar";
import TodoHomeTodoCard from "../HomeIndex/TodoHomeTodoCard";

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="flex justify-between px-6 my-4">
        {isSuccess && (
          <p className="text-blackens font-bold">{tasks.length} Task Found</p>
        )}
        <span className="bg-dim border-Shades px-2 border-b">Sort By </span>
      </div>
      <div>{isLoading && <p>loading</p>}</div>
      <div className="gap-y-2 grid">
        {isSuccess &&
          tasks?.map((items) => {
            return <TodoHomeTodoCard todoDetails={items} key={items._id} />;
          })}
      </div>
    </div>
  );
};
export default SearchTodoSearchArea;
