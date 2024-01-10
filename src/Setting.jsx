import Radio from "./Radio";
import styles from './Setting.module.css'

function Setting() {
    return (
      <>
      <p>Which Formula do you need the calculations</p>
      <Radio id={'calories'} name={'folrmulaCalc'} title={'Calories'}/>
      <Radio id={'kJoule'} name={'folrmulaCalc'} title={'Kjoules'}/>
      <p>BMR estimation formula: </p>
      <Radio id={'mifflin'} name={'bmrCalc'} title={'Mifflin St Jeor'}/>
      <Radio id={'revised'} name={'bmrCalc'} title={'Revised Harris-Benedict'}/>
      <div className="d-flex align-items-center ">
      <Radio id={'katch'} name={'bmrCalc'} title={'katch'}/>

      <div className={`input-group d-flex align-items-center ${styles.bodyFat}`}>
  <label htmlFor="">Body Fat</label>
  <input type="text" className="form-control" placeholder="Body Fat" aria-label="Body Fat" aria-describedby="basic-addon1"/>
  <span id="" className="form-text">%</span>
</div>
      </div>

      </>
    )
}

export default Setting
