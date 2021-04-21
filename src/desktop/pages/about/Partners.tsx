import { observer } from 'mobx-react';
import React from 'react';

@observer
export class Partners extends React.PureComponent {
  render() {
    return (
      <main>
        <section>
          <p>
            With the #RoamResponsibly campaign we aim to emphasize the importance of preserving the
            environment and to support our partner organisations in their missions to do so.
          </p>
        </section>
        <section>
          <h2>PARTNERS</h2>
        </section>
      </main>
    );
  }
}
