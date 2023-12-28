export default function Numbering(props) {
  const { num, des } = props;

  return (
    <div className="numbering-container">
      <div className="circle">
        <span className="text-in-circle">{num}</span>
      </div>
      <span className="text-bold">{des}</span>
    </div>
  );
}
