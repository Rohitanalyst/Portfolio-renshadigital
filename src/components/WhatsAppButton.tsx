const whatsappUrl =
  'https://wa.me/917042705236?text=Hi%20Rensha%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project.';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rensha Digital on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] md:bottom-7 md:right-7"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
        <path d="M16.02 2.67A13.3 13.3 0 0 0 4.55 22.7L2.67 29.33l6.8-1.78A13.33 13.33 0 1 0 16.02 2.67Zm0 24.23c-2.1 0-4.14-.56-5.92-1.62l-.43-.25-4.03 1.06 1.08-3.93-.28-.45A10.9 10.9 0 1 1 16.02 26.9Zm5.98-8.17c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.02-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.62 1.18 3.18 1.35 3.4.17.22 2.32 3.54 5.62 4.96.79.34 1.41.54 1.89.69.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.21-1.56.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
}
