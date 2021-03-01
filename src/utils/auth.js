import {Auth} from '@aws-amplify/auth';

export default class MyAuth {
  static async sign_up(attrs,fun_success,fun_error) {
    try {
      const { user } = await Auth.signUp({
        username: attrs.email,
        password: attrs.password,
        attributes: {
          email: attrs.email,
          nickname: attrs.nickname
        }
      })
      fun_success(user)
    } catch (error) {
      fun_error(error)
    }
  }

  static async verify(email,code,fun_success,fun_error) {
    try {
      await Auth.confirmSignUp(email, code);
      fun_success()
    } catch (error) {
      console.log('error confirming sign up', error);
      fun_error(error)
    }
  }

  static async log_in(email,password,fun_success,fun_error) {
    try {
      const user = await Auth.signIn(email, password);
      fun_success(user)
    } catch (error) {
      fun_error(error)
    }
  }

  static async log_out(success) {
    try {
      await Auth.signOut();
      success()
    } catch (error) {
      console.debug('error signing out: ', error);
    }
  }

  static async current_user(fun_success,fun_error){
    try {
      const data = await Auth.currentUserInfo()
      fun_success(data)
    } catch (error) {
      console.log('error',error)
      fun_error(error)
    }
  }

  static async current_session(fun_success,fun_error){
    try {
      const data = await Auth.currentSession()
      fun_success(dat)
    } catch (error) {
      console.log('error',error)
      fun_error(error)
    }
  }
}
