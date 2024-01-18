
import { UseCalories } from "./CaloriesContext";
import MetricForms from "./MetricForms";
import UsForms from "./UsForms";
import { NumericFormat } from 'react-number-format';




function Tabs() {
    const {toggle,provkeToggle,result,unit,errorList,errorsTxt,userObject} = UseCalories()
    const Errors = errorList.length > 0
    const errorNames = Errors  && errorList.map((item,index)=><span className="spanerror" key={index}>{item}</span>)
  return (
    <>
      <div className="d-flex align-items-cener justify-content-center">
        <button className={`btn btn-info me-2 ${toggle==='us'&&'active'}`} onClick={()=>provkeToggle('us')} >US Units</button>
        <button className={`btn btn-warning ${toggle==='metric'&&'active'}`} onClick={()=>provkeToggle('metric')}>Metric Units</button>
      </div>
      <div>
        {toggle==='metric'&&<MetricForms />}
        {toggle==='us'&&<UsForms />}
        <p className="bmrTxt">Your BMR <span className="bdge">{<NumericFormat value={result||""}   displayType="text" thousandsGroupStyle="lakh"  thousandSeparator="," />}</span> <span>{result&&unit}</span></p>
         <p className="errors"> {Errors&& <>Please Check <span>{errorNames}</span></> } </p>
         {errorsTxt.map((item,index)=><p key={index}>{item===false?'':item}</p>)}
         {userObject.katchStatus==='ok'&&<p className="katchFormula">in Katch Formula no need for Age Or Height </p>}
      </div>
    </>                
  );
}

export default Tabs;
