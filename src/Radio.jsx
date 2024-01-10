function Radio({title,name,id}) {
   
    return (
      <>
           
        <div className="form-check">
<input className="form-check-input" type="radio" name={name} id={id}/>
<label className="form-check-label" htmlFor={id}>
  {title}
</label>
</div>
      </>
    )
}

export default Radio
