import React from 'react';
import { Link } from 'react-app';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <header className="mdl-layout__header" ref="root">
        <div className="mdl-layout__header-row" style={{ padding: 0 }}>
          <Link className="mdl-layout-title mdl-navigation__link" to="/sort-visualization/">
            Sort Visualization
          </Link>
        </div>
      </header>
    );
  }

}

export default Header;
