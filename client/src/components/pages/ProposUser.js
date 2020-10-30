import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

import { useSelector } from "react-redux";

function Propos(props) {
  const user = useSelector((state) => state.authReducer.user);

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({
    name: "test",
    lastName: "test",
    age: "test",
    email: "test",
    mobile: "test",
    address: "test",
  });

  const about = () => {
    fetch(`/api/abouts/aboutuser/${props.match.params.id}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        setInfo(res);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => console.log("Err in getting posts: ", err));
  };
  useEffect(() => {
    about();
  }, []);

  // useEffect (() => {

  //     fetch(`/api/abouts/aboutuser/${_id}`, {

  //         method: 'GET',
  //         headers: {

  //             authorization: localStorage.getItem("token"),
  //           }
  //     })
  //     .then(res => res.json())
  //     .then(res => {

  //         setAbouts( [{abouts : res.mypost}])
  //     })
  //     .catch(err => console.log("Err in getting posts: ", err))
  // } ,[]);

  const { name, age, email, mobile, address, lastName } = info;

  if (loading) {
    return <h1 style={{ margin: "5rem" }}>Loading .......</h1>;
  }

  return (
    <div>
      <div>
        <h4>
          name :{name} {lastName}
        </h4>
        <h4>age :{age}</h4>
        <h4>email : {email}</h4>
        <h4>mobile : {mobile}</h4>
        <h4>address : {address}</h4>
      </div>
    </div>
  );
}

export default Propos;

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
