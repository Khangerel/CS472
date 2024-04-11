// Question 1
// Please open PDF File attached.

// Question 2
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

function bindUserContext(func, context) {
  return function () {
    return func.apply(context, arguments);
  };
}
// 1.wrapper solution
// askPassword(bindUserContext(user.loginOk, user), bindUserContext(user.loginFail, user));
// 2.call solution
// askPassword.call(user, user.loginOk.bind(user), user.loginFail.bind(user));
// 3.bind solution
// askPassword.bind(user, user.loginOk.bind(user), user.loginFail.bind(user))();
// 4.apply solution
// askPassword.apply(user, [user.loginOk.bind(user), user.loginFail.bind(user)]);
// 5.old solution
// askPassword(user.loginOk, user.loginFail);

// Question 3
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach((e) => console.log(this.title + " " + e));
  },
};
// group.showList();
