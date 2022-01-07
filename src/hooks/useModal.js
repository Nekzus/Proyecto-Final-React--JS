//**HOOK PARA LOGICA MODALS */
import { useState } from "react";

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);
    const [data, setData] = useState(null);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal, data, setData];
};

