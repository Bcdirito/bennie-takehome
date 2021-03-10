import '../../styling/home/NewUserForm.scss'
import backArrow from "../../assets/backArrow.svg"

const NewUserForm = (props) => {
    const {hideForm, submitHandler, changeHandler} = props
    return (
        <div id="formContainer" onClick={hideForm}>
            <div id="newUserForm">
                <img src={backArrow} alt="Back To Homepage" id="backArrow" onClick={hideForm} />
                <h1>Create New User:</h1>
                <form onSubmit={submitHandler}>
                    <div className="inputContainer">
                        <label>Full Name:</label>
                        <input type="text" data-obj="standard" name="name" required="required" onChange={changeHandler}/>            
                    </div>
                    <div className="inputContainer">
                        <label>Username:</label>
                        <input type="text" data-obj="standard" name="username" required="required" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Email:</label>
                        <input type="email" data-obj="standard" name="email" required="required" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Street:</label>
                        <input type="text" data-obj="address" name="street" required="required" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Suite:</label>
                        <input type="text" data-obj="address" name="suite" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>City:</label>
                        <input type="text" data-obj="address" name="city" required="required" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Zip:</label>
                        <input type="text" data-obj="address" name="zipcode" required="required" minLength="5" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Website:</label>
                        <input type="text" data-obj="standard" name="website" required="required" onChange={changeHandler}/>
                    </div>
                    <div className="inputContainer">
                        <label>Phone:</label>
                        <input type="text" data-obj="standard" name="phone" required="required" minLength="10" onChange={changeHandler}/>
                    </div>
                    <input type="submit" value="Submit User" />
                </form>
            </div>
        </div>
    )
}

export default NewUserForm
