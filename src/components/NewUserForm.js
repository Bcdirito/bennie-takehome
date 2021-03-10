import '../styling/NewUserForm.scss'
import backArrow from "../assets/backArrow.svg"

const NewUserForm = (props) => {
    return (
        <div id="formContainer" onClick={(e) => props.hideForm(e)}>
            <div id="newUserForm">
                <img src={backArrow} alt="Back To Homepage" id="xIcon" onClick={(e) => props.hideForm(e)} />
                <h1>Create New User:</h1>
                <form onSubmit={(e) => props.submitHandler(e)}>
                    <div className="inputContainer">
                        <label>Full Name:</label>
                        <input type="text" name="name" required="required" onChange={(e) => props.changeHandler(e)}/>            
                    </div>
                    <div className="inputContainer">
                        <label>Username:</label>
                        <input type="text" name="username" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Email:</label>
                        <input type="email" name="email" required="required"  onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Address:</label>
                        <input type="text" name="address" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Website:</label>
                        <input type="text" name="address" required="required"  onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Phone:</label>
                        <input type="text" name="address" required="required"  onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <input type="submit" value="Submit User" />
                </form>
            </div>
        </div>
    )
}

export default NewUserForm
