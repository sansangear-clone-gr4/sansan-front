const getCookie = (name) => {
  // aa=xx; user_id=aaa; abbb=sssss; 여기서 user_id의 키값(aaa)을 알고 싶다
  // [aa=xx, aaa; abbb=sssss;]
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 1) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
