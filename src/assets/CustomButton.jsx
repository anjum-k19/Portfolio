export default function CustomButton({ label = "Work", onClick }){
    return (
    <button className="custom-btn" onClick={onClick}>
      {label}
    </button>
  );
}