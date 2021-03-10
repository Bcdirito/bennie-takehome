import '../styling/NewUserForm.scss'

const NewUserForm = (props) => {
    return (
        <div id="formContainer" onClick={(e) => props.clickHandler(e)}>
            <div id="newUserForm">
                <h1>Create New User:</h1>
                <form onSubmit={(e) => props.submitHandler(e)}>
                    <div className="inputContainer">
                        <label>Full Name:</label>
                        <input type="text" name="name" onChange={(e) => props.changeHandler(e)}/>            
                    </div>
                    <div className="inputContainer">
                        <label>Username:</label>
                        <input type="text" name="username" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Email:</label>
                        <input type="email" name="email" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Address:</label>
                        <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Website:</label>
                        <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <div className="inputContainer">
                        <label>Phone:</label>
                        <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                    </div>
                    <input type="submit" value="Submit User" />
                </form>
            </div>
        </div>
    )
}

export default NewUserForm
