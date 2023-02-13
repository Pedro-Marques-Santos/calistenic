import Modal from 'react-modal';
import { Container, ImgProfile, ModifyProfile, Motivation, Name } from './styles';

import imgProfile from '../../assets/images/profile.jpg'
import { useEffect, useState } from 'react';

interface ModalProfileProps {
  stateModalProfile: boolean,
  closeModalProfile: () => void;
  tokenUser: string;
  openModalMotivation: () => void;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

interface IProfileUser {
  motivation: string;
  name: string;
  id: string;
}

export function ModalProfile({ 
  stateModalProfile, 
  closeModalProfile, 
  tokenUser, 
  openModalMotivation, 
  setUserId }: ModalProfileProps) {

  const [ name, setName ] = useState('');
  const [ motivation, setMotivation ] = useState('');

  useEffect(() => {
    const profile = async () => {

      let data = {
        token: tokenUser
      }

      let response = await fetch('http://localhost:3333/profileUser', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if(response.status === 200) {
        let profile = await response.json() as IProfileUser;
        setMotivation(profile.motivation);
        setName(profile.name);
        setUserId(profile.id);
      }

    }

    profile();
  });

  return(
    <Modal isOpen={stateModalProfile} onRequestClose={closeModalProfile}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
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
        <Name>{name}</Name>
        <Motivation>{motivation}</Motivation>
        <ModifyProfile onClick={openModalMotivation}>Change Motivation</ModifyProfile>
      </Container>
    </Modal>
  );
}