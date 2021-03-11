const FormField = (props) => {
    const {name, dataObj, label, labelClass, required} = props.data
    const {changeEvent} = props

    return (
        <div className="inputContainer">
            <label className={labelClass}>{label}</label>
            <input type="text" data-obj={dataObj} name={name} required={required} onChange={changeEvent}/>            
        </div>
    )
}

export default FormField