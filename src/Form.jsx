import Radio from "./Radio"
import Setting from "./Setting"

function Form() {
    return (
        <form action="">
        <div className="row g-3 align-items-center mb-2 mt-3">
<div className="col-auto">
<label htmlFor="inputPassword6" className="col-form-label">Age</label>
</div>
<div className="col-auto">
<input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
</div>
<div className="col-auto">
<span id="passwordHelpInline" className="form-text">
 Age between 25-80
</span>
</div>
</div>
<div className="d-flex align-items-center mb-2">
<p>Gender</p>
<Radio title='Male' name={'gender'} txt={''} id={'male'}/>
<Radio title='Female' name={'gender'} txt={''} id={'female'}/>

</div>
<div>
<div className="input-group mb-3 d-flex align-items-center mt-3">
  <label htmlFor="">Height</label>
  <input type="text" className="form-control" placeholder="Height" aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1">@</span>
</div>
<div className="input-group mb-3 d-flex align-items-center mt-3">
  <label htmlFor="">Weight</label>
  <input type="text" className="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1">@</span>
</div>
</div>
<p className="setting text-white">Settings+</p>
          <Setting/>
<button type="submit" className="btn btn-success calcBtn">Calculate</button>
    </form>
    )
}

export default Form
