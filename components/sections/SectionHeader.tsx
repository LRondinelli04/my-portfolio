type Props = {
  label: string;
};

export default function SectionHeader({ label }: Props) {
  return (
    <div className="section-header-v2">
      <span className="section-header-line" aria-hidden="true" />
      <span className="section-header-label">{label}</span>
    </div>
  );
}
