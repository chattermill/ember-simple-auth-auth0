import { inject as service } from '@ember/service';
import Auth0UrlHashAuthenticator from 'ember-simple-auth-auth0/authenticators/auth0-url-hash';

export default Auth0UrlHashAuthenticator.extend({
  auth0: service(),
  authenticate(options) {
    return this.performSilentAuth(options);
  }
});
