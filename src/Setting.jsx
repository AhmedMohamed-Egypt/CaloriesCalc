import { UseCalories } from "./CaloriesContext";
import Radio from "./Radio";
import styles from './Setting.module.css'

function Setting() {
  const {collectuserObject,userObject,getBodyFat,bodyFat} = UseCalories()
    return (
      <>
      <p>Which Formula do you need the calculations</p>
      <Radio id={'calories'} name={'folrmulaCalc'} value={'calories'} onChange={(e)=>{collectuserObject({...userObject,unit:e.target.value})}} title={'Calories'}/>
      <Radio id={'kJoule'} name={'folrmulaCalc'} value={'kJoules'}  onChange={(e)=>{collectuserObject({...userObject,unit:e.target.value})}} title={'Kjoules'}/>
      <p>BMR estimation formula: </p>
      <Radio id={'mifflin'} name={'bmrCalc'} value={'mifflin'} onChange={(e)=>{collectuserObject({...userObject,equation:e.target.value,katchStatus:'notok'});getBodyFat("")}} title={'Mifflin St Jeor'}/>
      <Radio id={'revised'} name={'bmrCalc'} value={'revised'} onChange={(e)=>{ collectuserObject({...userObject,equation:e.target.value,katchStatus:'notok'}); getBodyFat("")}} title={'Revised Harris-Benedict'}/>
      <div className="d-flex align-items-center ">
      <Radio id={'katch'} name={'bmrCalc'} value={'katch'} onChange={(e)=>collectuserObject({...userObject,equation:e.target.value,age:"",height:"", katchStatus:'ok'})} title={'katch'}/>

      <div className={`input-group d-flex align-items-center ${styles.bodyFat}`}>
  <label htmlFor="">Body Fat</label>
  <input disabled={userObject.equation==='revised' || userObject.equation==='mifflin' ?true:false} type="text" className={`form-control ${userObject.equation==="katch" &&  bodyFat===""&&`errorInput`||``}`} placeholder="Body Fat" value={bodyFat} onChange={(e)=>{getBodyFat(e.target.value)}} aria-label="Body Fat" aria-describedby="basic-addon1"/>
  <span id="" className="form-text">%</span>
</div>
      </div>

      </>
    )
}

export default Setting
