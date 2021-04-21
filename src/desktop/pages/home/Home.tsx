import React from 'react';

import './home.scss';

export class Home extends React.PureComponent {
  render() {
    return (
      <main className={'home-page'}>
        <section>
          <h2>We want to help conserve Scottish nature and landscapes</h2>
          <p>Scotland is filled with beautiful forests, lochs, munros, isles and beaches.</p>
          <p>
            With our social media campaign #RoamResponsibly we aim to raise awareness of the
            Scottish Outdoor Access Code and preserve these stunning and unique landscapes as
            beautiful as they are for future generations to enjoy.
          </p>
        </section>
        <div className={'home-page-links'}>
          <section>
            <h2>What is the Scottish Outdoor Access Code?</h2>
            <a>Read more here</a>
          </section>
          <section>
            <h2>Want to know more about our social media campaign?</h2>
            <a>Read more here</a>
          </section>
        </div>
      </main>
    );
  }
}
