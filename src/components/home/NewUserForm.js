import '../../styling/home/NewUserForm.scss'
import backArrow from "../../assets/backArrow.svg"

const NewUserForm = (props) => {
    return (
        <div id="formContainer" onClick={(e) => props.hideForm(e)}>
            <div id="newUserForm">
                <img src={backArrow} alt="Back To Homepage" id="backArrow" onClick={(e) => props.hideForm(e)} />
                <h1>Create New User:</h1>
                <form onSubmit={(e) => props.submitHandler(e)}>
                    <div className="inputContainer">
                        <label>Full Name:</label>
                        <input type="text" data-obj="standard" name="name" required="required" onChange={(e) => props.changeHandler(e)}/>            
                    </div>
                    <div className="inputContainer">
                        <label>Username:</label>
                        <input type="text" data-obj="standard" name="username" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Email:</label>
                        <input type="email" data-obj="standard" name="email" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Street:</label>
                        <input type="text" data-obj="address" name="street" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Suite:</label>
                        <input type="text" data-obj="address" name="suite" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>City:</label>
                        <input type="text" data-obj="address" name="city" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Zip:</label>
                        <input type="text" data-obj="address" name="zipcode" required="required" minLength="5" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Website:</label>
                        <input type="text" data-obj="standard" name="website" required="required" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Phone:</label>
                        <input type="text" data-obj="standard" name="phone" required="required" minLength="10" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <input type="submit" value="Submit User" />
                </form>
            </div>
        </div>
    )
}

export default NewUserForm
