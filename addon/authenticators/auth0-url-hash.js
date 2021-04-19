import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import Auth0BaseAuthenticator from 'ember-simple-auth-auth0/authenticators/auth0-base';

export default Auth0BaseAuthenticator.extend({
  auth0: service(),
  session: service(),
  authenticate(urlHashData) {
    if (this.auth0.skipSilentAuth) { return RSVP.resolve(); }

    return new RSVP.Promise((resolve, reject) => {
      this.auth0.resolveAuthResult(urlHashData, resolve, reject);
    });
  }
});
