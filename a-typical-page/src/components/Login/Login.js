// react
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

// styles
import classes from "./Login.module.css";

// reducer functions
import { emailReducer, passwordReducer } from "./reducers";

// context
import AuthContext from "../../context/auth-context";

// component
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Control from "../UI/Input/Control";

const Login = (props) => {
  // context
  const ctx = useContext(AuthContext);

  // refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // state
  const [formIsValid, setFormIsValid] = useState(false);

  // reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // distructuring reducer
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // effect
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("✅", "checking form validty");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // cleanup function
    return () => {
      console.log("🧹", "cleanup here");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      value: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      value: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Control
          ref={emailInputRef}
          isValid={emailIsValid}
          id="email"
          type="email"
          label="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Control
          ref={passwordInputRef}
          isValid={passwordIsValid}
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
