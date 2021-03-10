
const NewUserForm = (props) => {
    return (
        <div>
            <h1>Create New User:</h1>
            <form onSubmit={(e) => props.submitHandler(e)}>
                <label>Full Name:</label>
                <input type="text" name="name" onChange={(e) => props.changeHandler(e)}/>
                <label>Username:</label>
                <input type="text" name="username" onChange={(e) => props.changeHandler(e)}/>
                <label>Email:</label>
                <input type="email" name="email" onChange={(e) => props.changeHandler(e)}/>
                <label>Address:</label>
                <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                <label>Website:</label>
                <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                <label>Phone:</label>
                <input type="text" name="address" onChange={(e) => props.changeHandler(e)}/>
                <input type="submit" value="Submit User" />
            </form>
        </div>
    )
}

export default NewUserForm
