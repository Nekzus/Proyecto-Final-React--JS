import { useState } from "react";

const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);
    const [data, setData] = useState(0);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal, data, setData];
};
export default useModal;
