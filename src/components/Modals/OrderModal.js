import React from "react";
import {Form, Modal} from "react-bootstrap";
import {useAlert} from "react-alert";

const OrderModal = ({show, onClose}) => {

    const alert = useAlert()

    const handleSumbitOrder = (event) => {
        event.preventDefault()
        alert.show('Your order created')
        onClose()
    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSumbitOrder}>
                    <Form.Group controlId="formId">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" required/>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" name="email" required/>
                    </Form.Group>
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default OrderModal
