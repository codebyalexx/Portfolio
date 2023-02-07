export default class SessionManager {
  /**
   * Get random session code
   * @return {String} Returns a random session code
   */
  static random() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 20) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  /**
   * The session manager constructor
   */
  constructor() {
    /* It's creating a session id if not */
    if (!localStorage.getItem('sessionId')) localStorage.setItem('sessionId', SessionManager.random());

    /* It's storing the session id & create one if not  */
    this.sessionId = localStorage.getItem('sessionId');
  }
}
