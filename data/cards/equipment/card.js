window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.equipment = function(container, suffix) {
    const helpers = window.CardHelpers.createScopedHelpers(container, suffix);

    function toWizardLabel(entry) {
        const usesText = entry.uses ? ` ${'○'.repeat(Number(entry.uses))} uses.` : '';
        const details = entry.details ? ` ${entry.details}` : '';
        return `${entry.name}${usesText}${details}`.trim();
    }

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
