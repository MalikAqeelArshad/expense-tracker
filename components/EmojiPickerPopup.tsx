import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

interface EmojiPickerPopupProps {
   icon: string;
   onSelect: (emoji: string) => void;
}

const EmojiPickerPopup = ({ icon, onSelect }: EmojiPickerPopupProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const handleSelectedEmoji = (emoji: any) => {
      onSelect(emoji?.imageUrl || "");
      setIsOpen(false);
   };

   return (
      <div className="flex flex-col items-start gap-5">
         <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="size-14 p-3 shrink-0 flex items-center justify-center rounded-full shadow bg-purple-100 text-purple-500 text-2xl">
               {icon ? <img src={icon} className="size-12 object-contain" /> : <LuImage />}
            </div>
            <p className="font-semibold text-sm shrink-0">{icon ? "Change Icon" : "Pick Icon"}</p>
            {!icon && <small>* Please select an icon once you click the icon.</small>}
         </div>
         {isOpen && (
            <div className="w-full relative">
               <button
                  className="size-7 flex items-center justify-center bg-white border border-purple-200 hover:bg-red-50 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer"
                  onClick={() => setIsOpen(false)}
               >
                  <LuX />
               </button>

               <EmojiPicker open={isOpen} onEmojiClick={handleSelectedEmoji} />
            </div>
         )}
      </div>
   );
};

export default EmojiPickerPopup;
