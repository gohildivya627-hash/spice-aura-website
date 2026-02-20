export default function PrivacyPage() {
  return (
    <div className="container-pad py-12 prose prose-zinc max-w-3xl">
      <h1>Privacy Policy</h1>
      <p><strong>Effective date:</strong> {new Date().toISOString().slice(0,10)}</p>
      <p>
        Spice Aura Foods (“we”, “us”) respects your privacy. This policy explains what information we collect on
        <strong> spiceaurafoods.com</strong>, how we use it, and your choices.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Contact details</strong> you submit (name, email, phone, company, message).</li>
        <li><strong>Request details</strong> such as product interest, quantity estimates, and packaging preferences.</li>
        <li><strong>Basic usage data</strong> (if analytics is enabled later), such as page views and device type.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to inquiries and provide quotes.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal obligations where applicable.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with service providers that help run the website
        (for example, email delivery), only as needed to provide the service.
      </p>

      <h2>Retention</h2>
      <p>We keep inquiry information for as long as needed to respond and manage business records.</p>

      <h2>Your choices</h2>
      <p>You can request access, correction, or deletion of your information by emailing <a href="mailto:info@spiceaurafoods.com">info@spiceaurafoods.com</a>.</p>

      <h2>Cookies</h2>
      <p>We may use essential cookies for site operation. If analytics is enabled later, we’ll update this policy accordingly.</p>

      <h2>Contact</h2>
      <p>Email: <a href="mailto:info@spiceaurafoods.com">info@spiceaurafoods.com</a></p>
    </div>
  );
}
