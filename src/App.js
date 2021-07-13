import React, { useEffect } from "react";
import VisibilityFilter from "./components/VisibilityFilter";
import { NewNote } from "./components/NewNote";
import { Notes } from "./components/Notes";
import { initializeNotes } from "./reducers/noteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);
  return (
    <div className="App">
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
