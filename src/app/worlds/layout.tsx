/* ═══════════════════════════════════════════════════════════
   WORLDS LAYOUT
   Shell layout for /worlds/* routes.
   Individual world pages handle their own WorldProvider
   since the slug comes from nested dynamic routes.
   ═══════════════════════════════════════════════════════════ */

export default function WorldsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
