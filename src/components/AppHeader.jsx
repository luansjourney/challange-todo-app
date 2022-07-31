import { useState } from "react";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector( (state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className="appHeader">
        <Button type="button" variant="primary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter} > 
            <option value="all">All</option>
            <option value="new">new</option>
            <option value="in progress">In Progress</option>
            <option value="finished">Finished</option>
        </SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader;