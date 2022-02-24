import axios from 'axios';
import { toast } from 'react-toastify';
const Jwt = localStorage.getItem('token');


//Login user
const loginUser = (user) => {
    
    axios.post('http://localhost:9000/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.Token);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("id", res.data.id);
                toast.success(`Welcome back ${res.data.name} !`,{position: "top-center"});
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//Register a new user
const signupUser = (user) => {
    axios.post('http://localhost:9000/signup', user)
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//Update User Informations
const updateUser = (user) => {
    axios.put(`http://localhost:9000/user/update/${user.id}`,user,
    {
        headers : {Authorization : `Bearer ${Jwt}`}
    })
    .then(res => {
        localStorage.setItem("name", user.name);
        toast.success(res.data.message,{position: "top-center"})
    })
    .catch(err => {
        var errorMassage = err.response.data.error
        toast.error(errorMassage)
    });
}


//Insert items into bag
const insertBag = (props) => {
    axios.post('http://localhost:9000/bag/create',props,{
        headers : {Authorization : `Bearer ${Jwt}`},
    })
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//remove a item from bag
const removeBag = (props) => {
    axios.delete(`http://localhost:9000/bag/remove/${props}`,{
        headers : {Authorization : `Bearer ${Jwt}`},
      })
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//add a new address
const addAddress = (props) => {
    axios.post('http://localhost:9000/address/create', props,{
        headers : {Authorization : `Bearer ${Jwt}`},
    })
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//remove an existing addres
const removeAddress = (props) => {
    axios.put(`http://localhost:9000/address/remove/${props}`)
            .then(res => {                
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}


//place order
const createOrder = (props) => {
    axios.post('http://localhost:9000/order/create', props,{
        headers : {Authorization : `Bearer ${Jwt}`},
    })
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
    axios.delete(`http://localhost:9000/bag/remove/${props.id}`,{
        headers : {Authorization : `Bearer ${Jwt}`},
    })
            .then(res => {
                console.log(res.data.message)
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
    
}


//Update Size and Qty in bag
const updateSizeQty = (props) =>{
    axios.put(`http://localhost:9000/bag/update/${props.id}`,props)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
}
export { loginUser, signupUser, insertBag, removeBag, addAddress, removeAddress, createOrder, updateUser, updateSizeQty };