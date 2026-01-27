import React from 'react';

const ContactIcon = ({ href, label, ariaLabel, children, isButton = false, onClick }) => {
    const baseProps = {
        className: 'navbar-contact-icon',
        title: label,
        'aria-label': ariaLabel,
    };

    if (isButton) {
        return (
            <button
                {...baseProps}
                onClick={onClick}
                type="button"
            >
                {children}
            </button>
        );
    }

    return (
        <a
            {...baseProps}
            href={href}
            target={href?.startsWith('mailto:') ? undefined : '_blank'}
            rel={href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
            {children}
        </a>
    );
};

export default ContactIcon;
