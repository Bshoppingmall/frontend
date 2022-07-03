import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Login() {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  return (
    <div className="login">
      <h1 className="title">로그인</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default" style={{width: '90px', justifyContent: 'center'}}>
          아 이 디
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default" style={{width: '90px', justifyContent: 'center'}}>
          비밀번호
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => {
            setPw(event.target.value);
          }}
        />
      </div>

      <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          로그인
        </button>
    </div>
  );
}

export default Login;
