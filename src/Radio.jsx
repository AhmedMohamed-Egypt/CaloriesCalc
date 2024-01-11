function Radio({title,name,id,value,onChange,checked}) {
   
    return (
      <>
           
        <div className="form-check">
<input className="form-check-input" type="radio" name={name} id={id} value={value} onChange={onChange} checked = {checked}/>
<label className="form-check-label" htmlFor={id}>
  {title}
</label>
</div>
      </>
    )
}

export default Radio
