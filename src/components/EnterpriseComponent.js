'use strict';

import React from 'react';

require('styles/Enterprise.scss');

class EnterpriseComponent extends React.Component {
  render() {
    var enterprise = this.props.enterprise;
// this is a comment with a dim future
    return (
      <div className='search-result col span_1_of_2'>
        <div className="enterprise">
          <div className="enterprise__logo">
            <img src={'/images/logos/' + enterprise.logo} alt={enterprise.title + ' logo'}
              title={enterprise.title + ' logo'} />
          </div>
            <h2 className="enterprise__title">{enterprise.title}</h2>
            <div className="enterprise__description">{enterprise.description}</div>
            <div className="enterprise__website">
              <a href={enterprise.website}>Website</a>
            </div>
        </div>
      </div>
    );
  }
}

EnterpriseComponent.displayName = 'EnterpriseComponent';

// Uncomment properties you need
// EnterpriseComponent.propTypes = {};
// EnterpriseComponent.defaultProps = {};

export default EnterpriseComponent;
