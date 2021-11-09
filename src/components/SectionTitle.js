export default function SectionTitle(props) {
  return (
    <div className={props.isAlt ? 'section-title alt' : 'section-title'}>
      <h1>{props.title}</h1>
    </div>
  );
}