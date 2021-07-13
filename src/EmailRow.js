import { IconButton } from '@material-ui/core';
import { StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
    return (
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
            </div>

            <div className="emailRow__title">

            </div>

            <div className="emailRow__message">

            </div>

            <div className="emailRow__description">

            </div>
        </div>
    )
}

export default EmailRow
