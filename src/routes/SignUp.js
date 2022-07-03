import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";

function SignUp() {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [name, setName] = useState("");
  let a = true;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/alluser`
        );
        console.log(response.data.message);
      } catch (e) {
        console.log("error: ", e);
      }
    };
    fetchUsers();
  }, [a]);

  return (
    <div>
      <div className="login">
        <h2 className="title">회원가입</h2>

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
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">중복확인</button>
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

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default" style={{width: '90px', justifyContent: 'center'}}>
            이  름
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={()=>{
            axios({
                method: 'post',
                url: 'http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/regist',
                data: {
                    id: 'id',
                    pw: 'pw',
                    name: 'name'
                }
            });
          }}
        >
          회원가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUp;
