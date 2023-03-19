import {useRecoilState} from "recoil";
import {tokenState} from "../store/auth";
import {useEffect} from "react";
import {API} from "../constants/links";

export const useAuth = () => {
  const [,setToken] = useRecoilState(tokenState);
  const getToken = async () => {
    const response = await fetch(`${API}/auth/anonymous?platform=subscriptions`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin" : "*",
      }
    });
    const {token} = await response.json();
    if (token) {
      setToken(token);
    }
  }
  useEffect(() => {
    getToken();
  }, []);
}
