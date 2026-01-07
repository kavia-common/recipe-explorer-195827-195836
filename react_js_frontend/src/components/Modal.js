import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
export default function Modal({ title, children, onClose }) {
  /** Accessible modal overlay with focus management. */
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus close button to support keyboard users.
    closeButtonRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="ModalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
      onMouseDown={(e) => {
        // Close on backdrop click.
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="Modal">
        <div className="ModalHeader">
          <div>
            <h2 className="ModalTitle">{title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            className="ModalClose"
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
