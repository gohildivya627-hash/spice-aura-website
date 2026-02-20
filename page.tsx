export default function TermsPage() {
  return (
    <div className="container-pad py-12 prose prose-zinc max-w-3xl">
      <h1>Terms of Use</h1>
      <p><strong>Effective date:</strong> {new Date().toISOString().slice(0,10)}</p>

      <h2>Use of site</h2>
      <p>
        By using this website, you agree to use it lawfully and not to misuse the forms, content, or services.
      </p>

      <h2>Product information</h2>
      <p>
        Product details on the site are provided for general information. Availability, specifications, and pricing may change.
        Final terms will be confirmed in a written quotation or agreement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This website is provided “as is”. To the maximum extent permitted by law, Spice Aura Foods is not liable for damages arising
        from your use of the site.
      </p>

      <h2>Contact</h2>
      <p>Email: <a href="mailto:info@spiceaurafoods.com">info@spiceaurafoods.com</a></p>
    </div>
  );
}
