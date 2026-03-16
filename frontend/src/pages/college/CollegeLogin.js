import axios from "axios";

const login = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email: email,
        password: password
      }
    );

    console.log(res.data);

  } 
  catch (err) {
  console.log("Backend error:", err.response.data);
}

};