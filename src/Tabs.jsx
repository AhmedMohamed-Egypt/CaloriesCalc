import UsForms from "./UsForms";

function Tabs() {
  return (
    <>
      <div className="d-flex align-items-cener justify-content-center">
        <button className="btn btn-info me-2">US Units</button>
        <button className="btn btn-warning">Metric Units</button>
      </div>
      <div>
        <UsForms />
      </div>
    </>
  );
}

export default Tabs;
