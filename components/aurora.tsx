/** Soft, slowly drifting blobs of colour. `ribbon` adds a turning conic curtain for bold feature bands. */
export function Aurora({ warm = false, ribbon = false, className = "" }: { warm?: boolean; ribbon?: boolean; className?: string }) {
  return (
    <div className={`aurora ${warm ? "warm" : ""} ${className}`} aria-hidden>
      <span />
      <span />
      <span />
      <span />
      {ribbon && <div className="aurora-ribbon" />}
    </div>
  );
}
