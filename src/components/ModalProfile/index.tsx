import Modal from 'react-modal';
import { Container, ImgProfile, ModifyProfile, Motivation, Name } from './styles';

import imgProfile from '../../assets/images/profile.jpg'

interface ModalProfileProps {
  stateModalProfile: boolean,
  closeModalProfile: () => void;
}

export function ModalProfile({ stateModalProfile, closeModalProfile }: ModalProfileProps) {
  return(
    <Modal isOpen={stateModalProfile} onRequestClose={closeModalProfile}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={closeModalProfile}
        className="react-modal-close">
          <i className="fa-solid fa-xmark"></i>
      </button>
      <Container>
        <ImgProfile>
          <img src={imgProfile} alt="" />
        </ImgProfile>
        <ModifyProfile>Change Photo</ModifyProfile>
        <Name>Shambhavi Mishra</Name>
        <Motivation>My goal is to train every day, increase the number of repetitions and always challenge myself to develop a new movement.</Motivation>
        <ModifyProfile>Change Motivation</ModifyProfile>
      </Container>
    </Modal>
  );
}