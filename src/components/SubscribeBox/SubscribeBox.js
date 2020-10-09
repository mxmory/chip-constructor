import React from "react";
import {Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

import './SubscribeBox.scss'

const SubscribeBox = () => {
    return (
        <div className="subscribe-box">
            <Form className="subscribe-box__form">
                    <Form.Label>NEWSLETTER</Form.Label>
                    <div className="subscribe-box__input">
                        <Form.Control type="email" placeholder="Enter your email" required/>
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                    <Form.Text>
                        Remeber we will not do spam promise.
                    </Form.Text>
            </Form>
        </div>
    )
}

export default SubscribeBox
