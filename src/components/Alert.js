import React from 'react'

function Alert(props) {
    return (
        props.alert && <div>
            <div class="alert alert-success" role="alert">
                {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert