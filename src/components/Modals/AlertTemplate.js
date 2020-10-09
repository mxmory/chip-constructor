import React from "react";

const alertStyle = {
    backgroundColor: '#2A2A2B',
    color: '#fff',
    padding: '20px',
    textTransform: 'uppercase',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.04)',
    fontFamily: 'Proxima Nova',
    width: '300px',
    boxSizing: 'border-box'
}

const AlertTemplate = ({ message, style }) => {
    return (
        <div style={{ ...alertStyle, ...style }}>
            <span>{message}</span>
        </div>
    )
}

export default AlertTemplate
