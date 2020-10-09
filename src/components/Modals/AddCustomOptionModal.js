import React from "react";
import {Form, Modal} from "react-bootstrap";
import {addCustomOption} from "../../actions/actions";
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";

const AddCustomOptionModal = ({options, show, onClose}) => {

    const dispatch = useDispatch();
    const alert = useAlert()

    const handleSumbitNewOption = (event) => {
        event.preventDefault()
        dispatch(addCustomOption({
            id: options.length + 1,
            title: event.target.title.value,
            description: event.target.description.value,
            selected: false
        }))
        alert.show(`"${event.target.title.value}" option added`)
        onClose()
    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Custom Option</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSumbitNewOption}>
                    <Form.Group controlId="formId">
                        <Form.Label>Option Title</Form.Label>
                        <Form.Control type="text" name="title" required/>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" required/>
                    </Form.Group>
                    <button className="btn" type="submit">
                        Sumbit
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddCustomOptionModal
