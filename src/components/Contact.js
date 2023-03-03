import React from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { TextInput, Icon, Select } from "react-materialize";
export default function Contact() {
    return (
        <div className='box-container'
            style={{ borderStyle: "solid", width: "70%", margin: "85px 218px", borderRadius: "5%" }}
        >
            <div className='form-summit'
                style={{ margin: "20px 30px" }}
            >
                <TextInput
                    icon="account_box"
                    id="TextInput-54"
                    label="Name"
                />
                <TextInput
                    icon="phone"
                    id="TextInput-54"
                    label="Phone"
                />
                <TextInput
                    icon="email"
                    id="TextInput-54"
                    label="Email"
                    validate
                />
                <Select id='Select-46' multiple={false} onChange={function noRefCheck() { }} value=''>
                    <option disabled value=''>
                        Choose your favorite nation
                    </option>
                    <option value='1'>
                        England
                    </option>
                    <option value='2'>
                        France
                    </option>
                    <option value='3'>
                        Spain
                    </option>
                </Select>
                <TextInput
                    icon="assignment"
                    id="TextInput-54"
                    label="Reason"
                />
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
}
