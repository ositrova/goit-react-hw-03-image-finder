import { Component } from "react"
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalContainer, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handelKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelKeyDown);
    };

    handelKeyDown = e => {
        if (e.code === 'Escape'){
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { url, alt } = this.props;

        return createPortal (
<Overlay onClick={this.handleBackdropClick}>
                <ModalContainer>
                    <img src={url} alt={alt} />
                </ModalContainer>
            </Overlay>,
            modalRoot
        )
    }
};


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
