import React, {useState,useContext} from "react";
import Axios from "axios";
import {
     Row,
     Container,Col,Input,Button,InputGroup,InputGroupAddon
} from "reactstrap";





import UserCard from "../components/usercard";
import Repos from "../components/Repos";
import { Redirect } from "react-router";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


const Home =()=>{

    const context =useContext(UserContext)
    const [querry,setQuerry] = useState('')
    const [user,setUser] = useState(null)

    const fetchDetails = async() =>{
        try{
            const {data} = await Axios.get('https://api.github.com/users/${querry}')
            setUser(data)
            console.log({data});


        }catch (error){
            toast("Not able to locate user",{type:"error"})
        }
    }
       //put Anypage behind login

       if (!context.user?.uid){
           return<Redirect to ="/signin"/>
       }
        return(
      <Container>
        <Row className="mt-3">
            <Col md="5">
                <InputGroup>
                <Input
                type="text"
                value={querry}
                onChange = {e=> setQuerry(e.target.value)}
                placeholder="Please provide the userName"/>
                <InputGroupAddon addonType="append" >
                <Button onClick={fetchDetails} color="primary">
                    Fetch user
                </Button>
                </InputGroupAddon>
                </InputGroup>
                {user ? <usercard user={user} />: null}
            </Col>
            <Col md="7">{user ?<Repos repos_url={user.repos_url}/> : null}</Col>
        </Row>
    </Container>
  );
};

export default Home;
