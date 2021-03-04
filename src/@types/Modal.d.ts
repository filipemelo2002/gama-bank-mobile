interface IModalContextData {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface IModalProviderProps {
  children: ReactNode;
}