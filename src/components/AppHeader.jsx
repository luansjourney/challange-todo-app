import { useState } from "react";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);

  const updateFilter = () => {
    
  }

  return (
    <div className="appHeader">
        <Button type="button" variant="primary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter}> 
            <option value="all">ALL</option>
            <option value="new">new</option>
            <option value="in progress">In Progress</option>
            <option value="finished">Finished</option>
        </SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader;