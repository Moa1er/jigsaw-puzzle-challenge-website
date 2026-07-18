const SITE_CONFIG = Object.freeze({
  supportEmail: 'moapublish@gmail.com',
});

const configuredEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SITE_CONFIG.supportEmail)
  ? SITE_CONFIG.supportEmail
  : null;

document.querySelectorAll('[data-support-email]').forEach((element) => {
  if (configuredEmail) {
    element.textContent = configuredEmail;
    if (element instanceof HTMLAnchorElement) {
      element.href = `mailto:${configuredEmail}`;
    }
  } else {
    element.textContent = 'Support email must be configured before publication';
    if (element instanceof HTMLAnchorElement) {
      element.removeAttribute('href');
    }
  }
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const deletionForm = document.querySelector('#deletion-form');
if (deletionForm instanceof HTMLFormElement) {
  const submitButton = deletionForm.querySelector('button[type="submit"]');
  const status = deletionForm.querySelector('[data-form-status]');

  if (submitButton instanceof HTMLButtonElement) {
    submitButton.disabled = !configuredEmail;
  }

  if (!configuredEmail && status instanceof HTMLElement) {
    status.textContent = 'The site owner must configure a support email before this form can be used.';
  }

  deletionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!configuredEmail) return;

    const data = new FormData(deletionForm);
    const accountEmail = String(data.get('account-email') ?? '').trim();
    const accountId = String(data.get('account-id') ?? '').trim();
    const signInMethod = String(data.get('sign-in-method') ?? '').trim();
    const details = String(data.get('details') ?? '').trim();

    const body = [
      'Hello,',
      '',
      'I request permanent deletion of my Jigsaw Puzzle Games account and its associated cloud data.',
      '',
      `Account email: ${accountEmail}`,
      `Account ID: ${accountId || 'Not available'}`,
      `Sign-in method: ${signInMethod}`,
      `Additional details: ${details || 'None'}`,
      '',
      'I understand that local guest progress on my device and records retained by Google Play or Apple for legal and transaction purposes are separate from the app account.',
    ].join('\n');

    const mailto = `mailto:${configuredEmail}?subject=${encodeURIComponent(
      'Jigsaw Puzzle Games account deletion request',
    )}&body=${encodeURIComponent(body)}`;

    if (status instanceof HTMLElement) {
      status.textContent = 'Your email application should open with the request filled in. Review it, then send it.';
      status.style.color = 'var(--primary-dark)';
    }
    window.location.href = mailto;
  });
}
