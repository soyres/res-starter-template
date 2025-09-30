
"use client";
import PageShell from "../components/PageShell";
import TemplatePage from "../components/TemplatePage";
import { SITE_MODE } from "../config/site";

export default function AboutPage() {
  return (
    <PageShell mode={SITE_MODE} navPosition="top" showHamburger="mobile" drawerSide="right">
      <TemplatePage title="About" intro="A bit more detail about your work and process.">
        <p>Longer content here…</p>
      </TemplatePage>
    </PageShell>
  );
}
