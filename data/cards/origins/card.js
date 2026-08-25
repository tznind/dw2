window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.origins = function(container, suffix) {
    const helpers = suffix ? window.CardHelpers.createScopedHelpers(container, suffix) : window.CardHelpers;

    const hintsByRole = {
        "The Bard": {
            ancestry: "e.g. gnome, orc, giantkin, etc. What makes your art different from your people's?",
            community: "e.g. ever-curious scholars, filthy rich people, reclusive artists, etc. How do your life circumstances still influence your art?",
            background: "e.g. gladiator, librarian, performer, etc. Why did you choose art and danger over a simpler life?"
        },
        "The Cleric": {
            ancestry: "e.g. halfling, owlkin, tiefling, etc. What is their view of your faith?",
            community: "e.g. a bunch of lowlifes, devout people, law enforcers, etc. What traditions do you still honor separately from your deity?",
            background: "e.g. sheriff, urchin, wizard's apprentice, etc. What \"divine intervention\" made you quit and become a cleric?"
        },
        "The Fighter": {
            ancestry: "e.g. dragonborn, human, nephilim, etc. What fighting lesson from your childhood still stays with you?",
            community: "e.g. peaceful farmers, self-sacrificing miners, tough sailors, etc. Did they appreciate fighting prowess? Why?",
            background: "e.g. feral child, healer, miner, etc. What cause made you leave your former life of peace behind?"
        },
        "The Rogue": {
            ancestry: "e.g. catfolk, halfling, oozeling, etc. Were your parents law-abiding people?",
            community: "e.g. denizens of the Underdark, homeless people, privileged pricks, etc. Did you experience a lot of crime firsthand?",
            background: "e.g. criminal, squire, teacher, etc. Was it a slippery slope or a conscious decision to become who you are now?"
        },
        "The Wizard": {
            ancestry: "e.g. dwarf, elf, golem, etc. What event in your childhood drew you to the arcane?",
            community: "e.g. amateur magicians, landed gentry, nomadic people, etc. Was magic valued among your people? Why?",
            background: "e.g. cursed person, mercenary, street magician, etc. How much did you pay or sacrifice to learn the impossible?"
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
