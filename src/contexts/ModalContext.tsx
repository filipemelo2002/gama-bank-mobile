import React, { createContext, ReactNode, useState } from 'react';



export const ModalContext = createContext({} as IModalContextData);

export function ModalProvider({children, ...rest}: IModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      openModal,
      closeModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
}