export default React.createClass({
  displayName: 'Login',

  getInitialState() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },

  onSubmit(e) {
    e.preventDefault();

    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        window.location = '/';
      }
    });
  },

  render() {
    const errorStyle = this.state.error ? { display : 'block' } : null;
    return (
      <div className="w-section login-section">
        <div className="w-container login-content">
          <img src="images/blendata-logo.svg" className="logo-centered" />
          <div className="w-form form-wrapper borderless">
            <form id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form-modal"
              onSubmit={this.onSubmit}
            >
              <input id="Email"
                type="email"
                placeholder="Email"
                required="required"
                autoFocus="autofocus"
                name="Email"
                data-name="Email"
                className="w-input text-field"
                onChange={ (e) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <input id="Password"
                type="password"
                placeholder="Password"
                name="Password"
                data-name="Password"
                required="required"
                className="w-input text-field"
                onChange={ (e) => {
                  this.setState({ password: e.target.value });
                }}
              />
              <input type="submit"
                value="LOG IN"
                data-wait="Please wait..."
                className="w-button form-submit full-width"
              />
            </form>
            <div className="w-form-fail" style={errorStyle}>
              <p className="message-text">{this.state.error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
