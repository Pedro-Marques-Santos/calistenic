import Modal from "react-modal";
import {
  Container,
  ImgProfile,
  ModifyProfile,
  Motivation,
  Name,
} from "./styles";

import imgProfile from "../../assets/images/profile.jpg";

interface IUserProfile {
  motivation: string;
  avatar: string | null;
  name: string;
}

interface ModalProfileProps {
  stateModalProfile: boolean;
  closeModalProfile: () => void;
  openModalMotivation: () => void;
  userProfile: IUserProfile;
}

export function ModalProfile({
  stateModalProfile,
  closeModalProfile,
  openModalMotivation,
  userProfile,
}: ModalProfileProps) {
  return (
    <Modal
      isOpen={stateModalProfile}
      onRequestClose={closeModalProfile}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={closeModalProfile}
        className="react-modal-close"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <Container>
        <ImgProfile>
          <img src={imgProfile} alt="" />
        </ImgProfile>
        <Name>{userProfile.name}</Name>
        <Motivation>{userProfile.motivation}</Motivation>
        <ModifyProfile onClick={openModalMotivation}>
          Change Motivation
        </ModifyProfile>
      </Container>
    </Modal>
  );
}
