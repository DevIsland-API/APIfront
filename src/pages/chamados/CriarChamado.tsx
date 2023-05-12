import React, { useState } from 'react';
import Modal from '../../components/modals/modalDemand/modalDemand';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CriarChamado = ({ isOpen, onClose }: Props) => {
  const [modalAberto, setModalAberto] = useState(isOpen);

  const handleClose = () => {
    setModalAberto(false);
    onClose();
  };

  return (
    <div>
      <Modal isOpen={modalAberto} onClose={handleClose} />
    </div>
  );
};

export default CriarChamado;
