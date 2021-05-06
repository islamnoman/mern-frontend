import React from 'react';
import { Link } from 'react-router-dom';
import TextFieldInput from './../common/TextFieldInput';

function PasswordChangeView(props) {

    const { t, i18n } = props;
    const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');
    // const { error, isLoading } = props.login;
    const error = {}

    return (
        <div className="container w-50 mt-5 mb-5">
            {/* <!-- Change Password Form Card Starts --> */}
            {/* <!-- URL Breadcrumb Starts --> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent ml-n3">
                    <li className="breadcrumb-item"><Link to="/your_account">Your Account</Link></li>
                    <li className="breadcrumb-item active text-danger" aria-current="page">Change Password</li>
                </ol>
            </nav> 
            {/* <!-- URL Breadcrumb Ends --> */}

            <h3>Change Password</h3>

            {/* <!-- Change Password Form Starts --> */}
            <form onSubmit={props.handleSubmit} className="needs-validation w-85 mx-auto mt-5 font-weight-bold" autoComplete="off" noValidate>
                
                <TextFieldInput 
                    type="text"
                    name="username"
                    className={`form-control ${rtl}`}
                    placeholder="Noman Islam"
                    id="username"
                    value={props.username}
                    onChange={props.handleChange}
                    lblText={"Your Name: "}
                    i18n={i18n}
                    t={t}
                    error={error.username}
                />

                <TextFieldInput 
                    type="password"
                    name="oldPassword"
                    className={`form-control ${rtl}`}
                    placeholder="******"
                    id="oldPassword"
                    value={props.oldPassword}
                    onChange={props.handleChange}
                    lblText={"Old Password: "}
                    i18n={i18n}
                    t={t}
                    error={error.oldPassword}
                />

                <TextFieldInput 
                    type="password"
                    name="newPassword"
                    className={`form-control ${rtl}`}
                    placeholder="******"
                    id="newPassword"
                    value={props.newPassword}
                    onChange={props.handleChange}
                    infoText={"Password must be at least 6 characters."}
                    lblText={"New Password: "}
                    i18n={i18n}
                    t={t}
                    error={error.newPassword}
                />

                <TextFieldInput 
                    type="password"
                    name="newPassword2"
                    className={`form-control ${rtl}`}
                    placeholder="******"
                    id="newPassword"
                    value={props.newPassword2}
                    onChange={props.handleChange}
                    infoText={" Re-Type New password"}
                    lblText={"Re-Type New Password: "}
                    i18n={i18n}
                    t={t}
                    error={error.newPassword2}
                />

                {/* <div className="form-group">
                    <label htmlFor="userName">Your Name: </label>
                    <input type="text" name="username" className="form-control" placeholder="Noman Islam" id="userName"
                        required minLength="10" />
                    <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                    </div>
                    <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in your name.
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password: </label>
                    <input type="password" className="form-control" placeholder="******" name="oldPassword" id="oldPassword"
                        required minLength="6" />
                    <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                    </div>
                    <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in old password.
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">New Password: </label>
                    <input type="password" className="form-control" placeholder="******" name="newPassword" id="newPassword"
                        aria-describedby="passwordHelp" required minLength="6" />
                    <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must be at least 6 characters.</small>
                    <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                    </div>
                    <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword2">Re-Type New Password: </label>
                    <input type="password" className="form-control" placeholder="******" name="newPassword2" id="newPassword2"
                        aria-describedby="passwordHelp" required minLength="6" />
                    <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Re-Type new password.</small>
                    <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                    </div>
                    <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                    </div>
                </div> */}

                <button type="submit" className="btn btn-warning shadow btn-sm rounded">Update</button>
            </form> 
            {/* <!-- Change Password Form Ends --> */}
        </div> 
    )
}
export default PasswordChangeView
