import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./updateDelete.css"

const UpdateModal = ({_id}) => {
    // const [title, setTitle] = useState([]);
    // const [body, setBody] = useState([]);
    // const dispatch = useDispatch();
    let history = useHistory();

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [title1, setTitle1] = useState("");
    const [body, setBody] = useState("");

    // const handleFormChange = (e) =>
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleConfim = (e) => {
        e.preventDefault()
        fetch("/api/posts/update", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify({
                title,
                title1,
                body,
                postId: _id,
                postedBy: localStorage.getItem("_id")
            })
        })
       
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                window.location.reload();
            })
            .catch(err => console.log("Err in getting posts: ", err))
    };

    const toggle = () => setModal(!modal);

    // function Update(e) {
    //     


    return (
        <div>
            <Button className="edit" color="success" onClick={toggle}>
                Edit
          </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>update</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampletitle">title</Label>
                            <Input
                                // onChange={handleFormChange}
                                type="text"
                                name="title" 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter your Starting place..."
                            />
                             <Input
                                // onChange={handleFormChange}
                                type="text"
                                name="title1" 
                                value={title1}
                                onChange={e => setTitle1(e.target.value)}
                                placeholder="Enter your Arrival Area..."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="body">body</Label>
                            <Input
                                //onChange={handleFormChange}
                                type="text"
                                name="body" 
                                value={body}
                                onChange={e => setBody(e.target.value)}
                                placeholder="Enter your body..."
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) =>handleConfim(e)}>
                        Confirm
              </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
              </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateModal
