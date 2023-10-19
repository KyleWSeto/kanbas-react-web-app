import ModuleList from "./ModuleList";
import { FaEllipsisV } from 'react-icons/fa';

function Modules() {
  return (
    <div className="row">
      <div className="col-8">
        <h2>Modules</h2>
        <div class="d-flex gap-2 flex-row justify-content-end mb-4">
            <button class="btn btn-secondary">Collapse all</button>
            <button class="btn btn-secondary">View Progress</button>
            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Publish All
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Publish All</a></li>
                </ul>
            </div>
            <button class="btn btn-danger">Module</button>
            <button className="btn btn-secondary"><FaEllipsisV /></button>
        </div>
        <hr/>
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;