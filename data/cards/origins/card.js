window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.origins = function(container, suffix) {
    const helpers = suffix ? window.CardHelpers.createScopedHelpers(container, suffix) : window.CardHelpers;

    const hintsByRole = {
        "The Bard": {
            ancestry: "e.g. gnome, orc, giantkin, etc. What makes your art different from your people's?",
            community: "e.g. ever-curious scholars, filthy rich people, reclusive artists, etc. How do your life circumstances still influence your art?",
            background: "e.g. gladiator, librarian, performer, etc. Why did you choose art and danger over a simpler life?"
        }
    };

    const defaultHints = {
        ancestry: "e.g. ...",
        community: "e.g. ...",
        background: "e.g. ..."
    };

    function updateHints() {
        const roles = (window.Utils && window.Utils.getCurrentRoles) ? window.Utils.getCurrentRoles() : [];
        const matchedRole = roles.find(role => hintsByRole[role]);
        const hints = hintsByRole[matchedRole] || defaultHints;

        ['ancestry', 'community', 'background'].forEach(field => {
            const hintEl = helpers.getElement(`origins_${field}_hint`);
            if (hintEl) {
                hintEl.textContent = hints[field];
            }
        });
    }

    updateHints();

    document.querySelectorAll('select[id^="role"]').forEach(roleSelect => {
        roleSelect.addEventListener('change', updateHints);
    });
};
