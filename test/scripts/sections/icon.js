function icon(fragment) {
    var icon = fragment.appendChild(createSection('Icon'));

    icon.appendChild(
        createControl('mdi-check', {
            icon: {
                type: 'p-icon',
                dom: '<i class="mdi mdi-check" />',
            },
        })
    );

    icon.appendChild(
        createControl('mdi-close', {
            shape: 'p-curve',
            icon: {
                type: 'p-icon',
                dom: '<i class="mdi mdi-close" />',
            },
        })
    );

    icon.appendChild(
        createControl('mdi-close-outline', {
            shape: 'p-round',
            icon: {
                type: 'p-icon',
                dom: '<i class="mdi mdi-close-outline" />',
            },
        })
    );
}
