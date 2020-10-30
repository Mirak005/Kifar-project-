import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Input} from 'reactstrap';

 
import { useSelector } from "react-redux";

function Propos(props) {

    const user = useSelector((state) => state.authReducer.user);

          const [modal, setModal] = useState(false);
          const [modal1, setModal1] = useState(false);
          const [modal2, setModal2] = useState(false);
          const [modal3, setModal3] = useState(false);
      const [age, setAge] = useState("");
      const [mobile, setMobile] = useState("");
      const [address, setAddress] = useState("");
      const [name, setName] = useState("");
      const [lastName , setlastName] = useState(""); 


            const editname = (e) => {
        e.preventDefault()
     
                 fetch("/api/abouts/updatename", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify({
                name,
                lastName,
                // postId: _id,
                postedBy: localStorage.getItem("_id")
            })
        })
       
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                window.location.reload();
            })
            .catch(err => console.log("Err in edditing information: ", err))
        }

        const editage = (e) => {
            e.preventDefault()
         
                     fetch("/api/abouts/updateage", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'authorization': localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    age,
                    postedBy: localStorage.getItem("_id")
                })
            })
           
                .then(res => res.json())
                .then(res => {
                    console.log('res', res)
                    window.location.reload();
                })
                .catch(err => console.log("Err in edditing information: ", err))
            }

              const editmobile = (e) => {
        e.preventDefault()
     
                 fetch("/api/abouts/updatemobile", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify({
                
                mobile,
                
                // postId: _id,
                postedBy: localStorage.getItem("_id")
            })
        })
       
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
              window.location.reload();
            })
            .catch(err => console.log("Err in edditing information: ", err))
    
    }

          const editaddress = (e) => {
        e.preventDefault()
     
                 fetch("/api/abouts/updateaddresse", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify({
               
                address,
               
                // postId: _id,
                postedBy: localStorage.getItem("_id")
            })
        })
       
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                // window.location.reload();
            })
            .catch(err => console.log("Err in edditing information: ", err))
    
}
const toggle = () => setModal(!modal);
const toggle1 = () => setModal1(!modal1);
const toggle2 = () => setModal2(!modal2);
const toggle3 = () => setModal3(!modal3);

    return (
                <div>
                    <p>my a porops</p>
                    
                   
                  
                    <p><h4>{user.name} {user.lastName}</h4> <Button color="success" onClick={toggle}>Edit</Button>
                    <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Edit you'r name and lastName</ModalHeader>
          <ModalBody>
          <Input type="text" placeholder="put your new information" 
           name="name" 
           value={name}
           onChange={e => setName(e.target.value)}/>
           <Input type="text" placeholder="put your new information" 
           name="lastName" 
           value={lastName}
           onChange={e => setlastName(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) =>editname(e)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
       

        </Modal>
         </p>

        
                    <p><h4>age : {user.age}</h4> <Button color="success" onClick={toggle1}>Edit</Button>
                    <Modal isOpen={modal1} toggle={toggle1} >
          <ModalHeader toggle={toggle1}>Edit you'r Age</ModalHeader>
          <ModalBody>
          <Input type="text" placeholder="put your new information" 
           name="age" 
           value={age}
           onChange={e => setAge(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) =>editage(e)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle1}>Cancel</Button>
          </ModalFooter>
         
         </Modal>
         </p>
         

                    <p><h4>mobile : {user.mobile}</h4> <Button color="success" onClick={toggle2}>Edit</Button>
                    <Modal isOpen={modal2} toggle={toggle2} >
          <ModalHeader toggle={toggle2}>Edit you'r mobile</ModalHeader>
          <ModalBody>
          <Input type="text" placeholder="put your new information" 
           name="mobile" 
           value={mobile}
           onChange={e => setMobile(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) =>editmobile(e)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle2}>Cancel</Button>
          </ModalFooter>
       
        </Modal>
        </p>

                    <p><h4>address : {user.address}</h4> <Button color="success" onClick={toggle3}>Edit</Button>
                    <Modal isOpen={modal3} toggle={toggle3} >
          <ModalHeader toggle={toggle3}>Edit you'r address</ModalHeader>
          <ModalBody>
          <Input type="text" placeholder="put your new information" 
           name="address" 
           value={address}
           onChange={e => setAddress(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) =>editaddress(e)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle3}>Cancel</Button>
          </ModalFooter>
       
        </Modal>
        </p>
        </div>
                  
    )

};

export default Propos ;









//
//     const {
//         buttonLabel,
//         className
//       } = props;
    
//       const [modal, setModal] = useState(false);
//       const [age, setAge] = useState("");
//       const [mobile, setMobile] = useState("");
//       const [address, setAddress] = useState("");
//       const [mail, setMail] = useState("");
//       const [edtit, setEdit] = useState(true);

//       const handleConfim = (e) => {
//         e.preventDefault()
     
//                  fetch("/api/abouts/updateAbout", {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'accept': 'application/json',
//                 'authorization': localStorage.getItem("token"),
//             },
//             body: JSON.stringify({
//                 age,
//                 mobile,
//                 address,
//                 mail,
//                 // postId: _id,
//                 postedBy: localStorage.getItem("_id")
//             })
//         })
       
//             .then(res => res.json())
//             .then(res => {
//                 console.log('res', res)
//                 // window.location.reload();
//             })
//             .catch(err => console.log("Err in edditing information: ", err))
    

      
      
//             // fetch("/api/abouts/createabout", {
//             //     method: 'POST',
//             //     headers: {
//             //         'content-type': 'application/json',
//             //         'accept': 'application/json',
//             //         'authorization': localStorage.getItem("token"),
//             //     },
//             //     body: JSON.stringify({
//             //             age,
//             //             mobile,
//             //             address,
//             //             mail,
//             //         postedBy: localStorage.getItem("_id")
//             //     })
//             // })
//             // .then(res => res.json())
//             // .then(res => {
//             //     console.log('res', res)
//             // })
//             // .catch(err => console.log("Err in getting posts: ", err))

      
   
    

// }
//       const toggle = () => setModal(!modal);
    
//     return (
//         <div>
//             <p>my a porops</p>
//             <h4>{user.name} {user.lastName}</h4>
//             <span><h4>age :</h4> <h4>{age}</h4>
//         <Button color="success" onClick={toggle}>Edit</Button>
//         <Modal isOpen={modal} toggle={toggle} className={className}>
//           <ModalHeader toggle={toggle}>Edit you'r information</ModalHeader>
//           <ModalBody>
//            <Input type="text" placeholder="put your new information" 
//            name="age" 
//            value={age}
//            onChange={e => setAge(e.target.value)}/>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={(e) =>handleConfim(e)}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         </span>

//         <span><h4>mobile number :</h4> <h4>{mobile}</h4>
//         <Button color="success" onClick={toggle}>Edit</Button>
//         <Modal isOpen={modal} toggle={toggle} className={className}>
//           <ModalHeader toggle={toggle}>Edit you'r information</ModalHeader>
//           <ModalBody>
//            <Input type="text" placeholder="put your new information"
//            name="mobile" 
//            value={mobile}
//            onChange={e => setMobile(e.target.value)} />
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={(e) =>handleConfim(e)}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         </span>

//         <span><h4>address :</h4> <h4>{address}</h4>
//         <Button color="success" onClick={toggle}>Edit</Button>
//         <Modal isOpen={modal} toggle={toggle} className={className}>
//           <ModalHeader toggle={toggle}>Edit you'r information</ModalHeader>
//           <ModalBody>
//            <Input type="text" placeholder="put your new information" 
//            name="address" 
//            value={address}
//            onChange={e => setAddress(e.target.value)}/>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={(e) =>handleConfim(e)}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         </span>

//         <span><h4>mail :</h4> <h4>{mail}</h4>
//         <Button color="success" onClick={toggle}>Edit</Button>
//         <Modal isOpen={modal} toggle={toggle} className={className}>
//           <ModalHeader toggle={toggle}>Edit you'r information</ModalHeader>
//           <ModalBody>
//            <Input type="text" placeholder="put your new information"
//            name="mail" 
//            value={mail}
//            onChange={e => setMail(e.target.value)} />
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={(e) =>handleConfim(e)}>
//                 Do Something
//                 </Button>{' '}
//             <Button color="secondary" onClick={toggle}>
//                 Cancel
//                 </Button>
//           </ModalFooter>
//         </Modal>
//         </span>


//       </div>
//     );
