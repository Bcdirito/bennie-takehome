import '../../styling/home/NewUserForm.scss'
import backArrow from "../../assets/backArrow.svg"
import FormField from "./FormField"

const NewUserForm = (props) => {
    const {hideForm, submitHandler, changeHandler} = props
    const renderFormFields = () => {
        const standardFormNames = ["name", "username", "email", "website", "phone"]
        const addressFormNames = ["street", "suite", "city", "zipcode"]
        const allFields = [...generateFormFields(standardFormNames, 'standard'), ...generateFormFields(addressFormNames, 'address')]

        return allFields
    }

    const generateFormFields = (arr, objName) => {
        return arr.map(name => {
            const data = {
                name: name,
                dataObj: objName,
                label: `${name[0].toUpperCase()}${name.slice(1)}:`,
                labelClass: name !== 'suite' ? 'requiredField' : '',
                required: name !== 'suite' ? 'required' : ''
            }

            return (<FormField key={name} data={data} changeEvent={changeHandler} />)
        })
    }

    return (
        <div id="formContainer" onClick={hideForm}>
            <div id="newUserForm">
                <img src={backArrow} alt="Back To Homepage" id="backArrow" onClick={hideForm} />
                <h1>Create New User:</h1>
                <form onSubmit={submitHandler}>
                    {renderFormFields()}
                    <input type="submit" value="Submit User" />
                </form>
            </div>
        </div>
    )
}

export default NewUserForm
