import { IconButton, Popover } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import Checkbox from "@material-ui/core/Checkbox";
import React from 'react';
import "./EmailRow.css";
import { useHistory } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {
const history = useHistory()


    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}
                    <span className="emailRow__description">-
                    {description}</span>
                </h4>
            </div>

            <Popover className="emailRow__time">
                {time}
            </Popover>
        </div>
    )
}

export default EmailRow
