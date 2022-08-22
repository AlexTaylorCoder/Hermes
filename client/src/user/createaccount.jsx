

function CreateAccount() {

    return (
            <form className="center-form">
                <div id = "create-account">
                    <h1> Create your account</h1>
                    <label>Username<input type='text'/></label>
                    <label>Password<input type='password'/></label>
                    <label>First Name<input type='text'/></label>
                    <label>Last Name<input type='text'/></label>
                    <label>Email<input type='text'/></label>
                    <label>Bio<textarea /></label>
                    <input value=""type="submit"/>
                </div>
            </form>
    )
}

export default CreateAccount