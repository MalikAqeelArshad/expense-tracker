interface CardProps {
   children?: React.ReactNode;
   header?: React.ReactNode;
   title?: string;
   className?: string;
   headerStyle?: string;
}

const Card = ({ children, header, title, className, headerStyle }: CardProps) => {
   return (
      <section className="card">
         <header className={`flex items-center pb-3 ${headerStyle || "justify-between"}`}>
            {title && <h2 className="font-semibold lg:text-lg">{title}</h2>}
            {header}
         </header>
         <main className={className}>{children}</main>
      </section>
   );
};

export default Card;
