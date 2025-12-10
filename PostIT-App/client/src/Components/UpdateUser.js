import { useParams } from "react-router-dom";
import { updateUser } from "../Features/UserSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import{Form,FormGroup,Input,Label,Button,Container,Row,Col,} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidations.js";



function UpdateUser()
{
const { user_email, user_name, user_password } = useParams();
 const [name, setname] = useState(user_name);
const [email, setemail] = useState(user_email);
const [password, setpassword] = useState(user_password);
const [confirmPassword, setconfirmPassword] = useState(user_password);
const dispatch=useDispatch();

const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), 
  });

const handleUpdate =()=> {
    try{
    const userData = {
      name: name, 
      email: email,
      password: password,
    }

    dispatch(updateUser(userData)); 
    alert("validation all good. ")
}
catch(error)
{
console.log(error);

  }
}
return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
        {/* Excute first the submitForm funtion and if validation is good excute the handlesumbit function*/}
        <form className="div-form" onSubmit={handleSubmit(handleUpdate)}>
          <div className="appTitle"></div>
          <section className="form">
            <div className="form-group">
              <input
              type="text"
              value ={name}
              className="form-control"
              id="name"
              placeholder="Enter your name....."
              {...register("name",{
                onChange:(e)=> setname(e.target.value),
              })} //(e)=> event say...
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div className="form-group">
              <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter your email....."
              {...register("email",{
                onChange:(e)=> setemail(e.target.value),
              })} 
              />
              <p className="error">{errors.email?.message}</p>
            </div>

             <div className="form-group">
              <input
              type="password"
              className="form-control"
              id="password"
              value ={password}
              placeholder="Enter your password....."
              {...register("password",{
                onChange:(e)=> setpassword(e.target.value),
              })} 
              />
              <p className="error">{errors.password?.message}</p>
            </div>

            <div className="form-group">
              <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value ={confirmPassword}
              placeholder="Enter the confirm password....."
              {...register("confirmPassword",{
                onChange:(e)=> setconfirmPassword(e.target.value),
              })} 
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </div>
            <Button type= "submit" color="primary" className="button">
              Register
            </Button>
          </section>
        </form>
        </Col>
        <Col className="columndiv2" lg="6"></Col>
      </Row>
      <Row>
        <Col md={6}>
        <h2>List of Users</h2>
        </Col>
      </Row>
    </Container>
  );
};
  

export default UpdateUser;
