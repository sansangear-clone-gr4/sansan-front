const REST_API_KEY = "a40080563f3a1a6cababbd44cb6aeb5f";
const REDIRECT_URI =
  "https://main.d190axk94g1vg.amplifyapp.com/api/user/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
