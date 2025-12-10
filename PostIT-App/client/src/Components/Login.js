import{Form,FormGroup,input,Label,Button,Container, Row,Col,} from "reactstrap";
import logo from"../Images/logo-t.png";
import { Link ,useNavigate} from "react-router-dom";
import { useState,useEffect} from "react";
import{useSelector,useDispatch} from "react-redux";
import { login } from "../Features/UserSlice";


const Login = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const user=useSelector((state)=>state.users.user);
  const isSuccess =useSelector((state)=>state.users.isSuccess);
  const isError=useSelector((state)=>state.users.isError);

 useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);



const handleLogin = () => {
  try {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  } catch (error) {
    alert(error);
  }
};

 

  return (
    <div>
      <Container>
<Form >
<Row>
<Col md={3}>
<img src={logo}/>
</Col>
</Row>
<Row>
  <Col md={3}>
  <FormGroup>
    <Label for="email">
      Email
      </Label>
      <input 
      id="email"
      name="email"
      placeholder="Enter email..."
      type="email"
      onChange={(e)=> setemail(e.target.value)}
      />
      </FormGroup></Col>
</Row>

<Row>
  <Col md={3}>
  <FormGroup>
    <Label for="password">
      Password
      </Label>
      <input 
      id="password"
      name="password"
      placeholder="Enter password..."
      type="password"
      onChange={(e)=> setpassword(e.target.value)}/>
      </FormGroup></Col>
</Row>
<Row>
  <Col md={3}>
   <Button
  color="primary"
  className="button"
  type="button"
   onClick={handleLogin}

>
  Login
</Button>

    </Col></Row>
  </Form>
  
  
  <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
</Container>
</div>
  );
};

export default Login;
