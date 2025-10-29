export default function CustomCard({ children, cardClass }){
    return (
        <div className={`custom-card-wrapper  ${cardClass ? cardClass : ""}`}>
          {children} 
        </div>
      ); 
}