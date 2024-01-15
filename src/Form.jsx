import { UseCalories } from "./CaloriesContext"
import Radio from "./Radio"
import Setting from "./Setting"


function Form({HeightUnit,showFeet,inch,uH,uW}) {
  const {collectuserObject,userObject,calcluateCalories} = UseCalories()
    return (
        <form action="">
        <div className="row g-3 align-items-center mb-2 mt-3">
<div className="col-auto">
<label htmlFor="inputPassword6" className="col-form-label">Age</label>
</div>
<div className="col-auto">
<input type="text" min="25"  max="85" id="inputPassword6" placeholder="Age" className="form-control" aria-describedby="passwordHelpInline" value={userObject.age} onChange={(e)=>{collectuserObject({...userObject,age:e.target.value})}}/>
</div>
<div className="col-auto">
<span id="passwordHelpInline" className="form-text">
 Age between 25-80
</span>
</div>
</div>
<div className="d-flex align-items-center mb-2">
<p className="gndr">Gender</p>
<Radio title='Male' name={'gender'} txt={''}  id={'male'} value={'male'} onChange={(e)=>{collectuserObject({...userObject,gender:e.target.value})}}/>
<Radio title='Female' name={'gender'} txt={''} id={'female'}value={'female'} onChange={(e)=>{collectuserObject({...userObject,gender:e.target.value})}}/>

</div>
<div>
<div className="input-group mb-3 d-flex align-items-center mt-3">
  <label htmlFor="">Height</label>
  <input type="text" className="form-control" placeholder={HeightUnit} onChange={(e)=>{collectuserObject({...userObject,height:e.target.value})}} value={userObject.height} aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1">{uH}</span>
  {showFeet&&<>
    <input type="text" className="form-control" placeholder={inch} onChange={(e)=>e.target.value} value={""} aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1">{inch}</span>
  </>
  }
  
</div>
<div className="input-group mb-3 d-flex align-items-center mt-3">
  <label htmlFor="">Weight</label>
  <input type="text" className="form-control" placeholder="Weight" value={userObject.weight} onChange={(e)=>{collectuserObject({...userObject,weight:+e.target.value})}} aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1">{uW}</span>
</div>
</div>

<p className="setting text-white">Settings+</p>
        <Setting/>
<button type="submit" onClick={(e)=>{e.preventDefault();calcluateCalories()}} className="btn btn-success calcBtn">Calculate</button>

    </form>
    )
}

export default Form
