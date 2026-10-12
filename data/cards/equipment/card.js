window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.equipment = function(container, suffix) {
    const helpers = window.CardHelpers.createScopedHelpers(container, suffix);

    function toWizardLabel(entry) {
        const usesText = entry.uses ? ` ${'○'.repeat(Number(entry.uses))} uses.` : '';
        const details = entry.details ? ` ${entry.details}` : '';
        return `${entry.name}${usesText}${details}`.trim();
    }

    function isTrackFull(trackSpan) {
        const shapes = trackSpan.querySelectorAll('.track-shape');
        if (shapes.length === 0) {
            return false;
        }
        return trackSpan.querySelectorAll('.track-shape.filled').length === shapes.length;
    }

    function updateWealthTierUnderlines() {
        const trackSpans = Array.from(container.querySelectorAll('[data-track]'));

        // The current tier is the first one not yet fully filled (everything
        // before it must therefore be full too) - only that tier is underlined,
        // not every tier that happens to follow a full one.
        let currentIndex = trackSpans.findIndex(trackSpan => !isTrackFull(trackSpan));
        if (currentIndex === -1) {
            currentIndex = trackSpans.length; // every tier full - nothing left to underline
        }

        trackSpans.forEach((trackSpan, index) => {
            const label = trackSpan.querySelector('.track-label');
            if (!label) {
                return;
            }
            // index 0 (Broke) is the default state and is never highlighted
            const achieved = currentIndex > 0 && index === currentIndex;
            label.style.textDecoration = achieved ? 'underline' : '';
            label.style.fontWeight = achieved ? '900' : '';
        });
    }

    updateWealthTierUnderlines();

    // Track shapes toggle a 'filled' class on click, and get rebuilt entirely
    // when a dynamic track's max value changes - watch both to stay in sync.
    const wealthTierObserver = new MutationObserver(updateWealthTierUnderlines);
    wealthTierObserver.observe(container, {
        attributes: true,
        attributeFilter: ['class'],
        childList: true,
        subtree: true
    });

    helpers.addEventListener('starting-equipment-btn', 'click', async () => {
        const selectedRole = window.Utils ? window.Utils.getCurrentRole() : null;

        if (!selectedRole) {
            alert('Please select a class first');
            return;
        }

        const roleData = window.availableMap ? window.availableMap[selectedRole] : null;
        const gearData = roleData ? roleData['default-gear'] : null;

        if (!gearData || gearData.length === 0) {
            alert(`No starting equipment defined for ${selectedRole}`);
            return;
        }

        // Map wizard display labels back to their {name, details, uses} entry
        const optionMap = new Map();
        const wizardData = gearData.map(group => {
            group.options.forEach(entry => optionMap.set(toWizardLabel(entry), entry));
            return {
                type: group.type,
                title: group.title,
                options: group.options.map(toWizardLabel)
            };
        });

        const selections = await window.Wizard.show(wizardData, {
            title: `Starting Equipment - ${selectedRole}`
        });

        if (!selections) {
            return;
        }

        selections.forEach(label => {
            const entry = optionMap.get(label);
            if (!entry) {
                return;
            }
            helpers.addTableRow('equipment', {
                name: entry.name,
                details: entry.details || '',
                uses: entry.uses ? `${entry.uses}/${entry.uses}` : ''
            });
        });
    });
};
