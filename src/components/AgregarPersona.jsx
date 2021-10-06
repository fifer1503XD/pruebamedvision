import React from 'react';
import Modal from 'react-modal';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { AddNewPerson } from '../actions/personas';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const AgregarPersona = () => {
    const dispatch = useDispatch();
    const initialForm = {
        document: 'juan',
        firstName: '1',
        lastName: 'felipe',
        birthDate: '2021-10-06T22:47:32.6Z',
        isMarried:true,
        height:0
    };
    const [formValues, handleInputChange] = useForm(initialForm);
    let { document,firstName,lastName,birthDate,isMarried,height } = formValues;
    const handleNewPerson = (event) => {
            dispatch(AddNewPerson(document,firstName,lastName,birthDate,isMarried,height))
        setIsOpen(false);
    };


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);

    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <FontAwesomeIcon onClick={openModal} icon={faPlusCircle} />
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Agrega una persona</h2>
                <button onClick={closeModal}>X</button>
                <form noValidate >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="documento"
                        label="Documento"
                        name="document"
                        autoComplete="name"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Nombres"
                        name="firstName"
                        autoComplete="first Name"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellidos"
                        name="lastName"
                        autoComplete="LastName"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        type="datetime-local"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Fecha de Nacimiento"
                        name="birthDate"
                        autoComplete="LastName"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        type="list"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Casado"
                        name="isMarried"
                        autoComplete="casado"
                        onChange={handleInputChange}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="Altura"
                        label="Altura"
                        name="height"
                        autoComplete="Altura"
                        onChange={handleInputChange}
                        autoFocus
                    />
                  
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => handleNewPerson()}
                    >
                        Agregar perro
                    </Button>

                </form>
            </Modal>
        </div>
    );
}

export default AgregarPersona;