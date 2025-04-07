"use client";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

interface ModalProps {
   children?: React.ReactNode;
   title?: string;
   subTitle?: string;
   isOpen?: boolean;
   onClose?: () => void;
}

const Modal = ({ children, title, subTitle, isOpen = false, onClose }: ModalProps) => {
   const [show, setShow] = useState(false);
   useEffect(() => setShow(isOpen), [isOpen]);
   return (
      isOpen && (
         <aside className="modal-overlay">
            <section className={`modal-content ${show && "show"}`}>
               <header className="modal-header">
                  <div className="flex flex-col gap-0.5">
                     {title && <h1 className="md:text-lg font-semibold">{title}</h1>}
                     {subTitle && <p className="text-xs md:text-sm text-gray-500">{subTitle}</p>}
                  </div>
                  <button type="button" onClick={onClose} className="btn-close">
                     <LuX className="text-lg" />
                  </button>
               </header>
               <main className="modal-body">{children}</main>
            </section>
            )
         </aside>
      )
   );
};

export default Modal;
