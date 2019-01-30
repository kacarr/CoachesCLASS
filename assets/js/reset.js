'use strict';

const e = React.createElement;

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false };
  }

  render() {
    if (this.state.reset) {
      return 'You have just reset your password. Please go check your email.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ reset: true }) },
      'Reset'
    );
  }
}

const domContainer = document.querySelector('#reset_button_container');
ReactDOM.render(e(ResetButton), domContainer);