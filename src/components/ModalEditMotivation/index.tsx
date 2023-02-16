import { useState } from 'react';
import Modal from 'react-modal';
import { Button, Container, ContentButton, InputMotivation } from './styles';

interface ModalEditMotivationProps {
  stateModalMotivation: boolean;
  closeModalMotivation: () => void;
}

export function ModalEditMotivation({ 
  stateModalMotivation, 
  closeModalMotivation,}: ModalEditMotivationProps) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [motivation, setMotivation] = useState('');

  async function handleMotivationModify() {
    closeModalMotivation();
  }

    

  return(
    <Modal
      isOpen={stateModalMotivation}
      onRequestClose={closeModalMotivation}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={closeModalMotivation}
        className="react-modal-close">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <Container>
        <InputMotivation>
          <h4>Motivação</h4>
          <textarea id="story" name="story" onChange={event => setMotivation(event.target.value)}></textarea>
          <div>Limite de caracteres: 120</div>
        </InputMotivation>
        <ContentButton>
          <Button onClick={closeModalMotivation}>Cencelar</Button>
          <Button onClick={handleMotivationModify}>Editar</Button>
        </ContentButton>
      </Container>
    </Modal>
  );
}