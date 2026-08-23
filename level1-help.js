// Level 1 Help - shows role-specific starting-stat guidance from availability.json's
// `level1Help` field (e.g. "The Bard") next to the Level/Xp/HP/Armor row in cs.html.
// Kept as a standalone bolt-on script so it doesn't touch main.js/utils.js.
(function() {
    'use strict';

    function showLevel1HelpModal(title, text) {
        const modal = document.createElement('div');
        modal.className = 'role-description-modal';
        const formattedText = window.TextFormatter ? window.TextFormatter.format(text) : text;
        modal.innerHTML = `
            <div class="role-description-content">
                <button class="role-description-close" aria-label="Close">&times;</button>
                <h3>${title}</h3>
                <div class="help-text"></div>
            </div>
        `;

        modal.querySelector('.help-text').innerHTML = formattedText;

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        modal.querySelector('.role-description-close').addEventListener('click', () => {
            modal.remove();
        });

        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);

        document.body.appendChild(modal);
    }

    function handleClick() {
        const roleName = window.Utils ? window.Utils.getCurrentRole() : null;
        if (!roleName) {
            alert('Please select a class first');
            return;
        }

        const roleData = window.availableMap ? window.availableMap[roleName] : null;
        const helpText = roleData ? roleData.level1Help : null;

        if (!helpText) {
            alert(`No Level 1 guidance available for ${roleName}`);
            return;
        }

        showLevel1HelpModal(`${roleName} - Level 1`, helpText);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('level1-help-button');
        if (button) {
            button.addEventListener('click', handleClick);
        }
    });
})();
