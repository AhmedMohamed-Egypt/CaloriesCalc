
import { UseCalories } from "./CaloriesContext";
import MetricForms from "./MetricForms";
import UsForms from "./UsForms";

function Tabs() {
    const {toggle,provkeToggle,result,unit} = UseCalories()
  return (
    <>
      <div className="d-flex align-items-cener justify-content-center">
        <button className={`btn btn-info me-2 ${toggle===1&&'active'}`} onClick={()=>provkeToggle(1)} >US Units</button>
        <button className={`btn btn-warning ${toggle===2&&'active'}`} onClick={()=>provkeToggle(2)}>Metric Units</button>
      </div>
      <div>
        {toggle===2&&<MetricForms />}
        {toggle===1&&<UsForms />}
        <p className="bmrTxt">Your BMR <span className="bdge">{result}</span> <span>{result&&unit}</span></p>

      </div>
    </>                
  );
}

export default Tabs;
