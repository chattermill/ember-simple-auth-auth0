import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Auth0BaseAuthenticator from 'ember-simple-auth-auth0/authenticators/auth0-base';

export default Auth0BaseAuthenticator.extend({
  auth0: service(),
  authenticate(options) {
    try {
      return this._performSilentAuth()
        .catch(() => get(this, 'auth0').showLock(options));
    } catch (e) {
      return get(this, 'auth0').showLock(options);
    }
  },
});
