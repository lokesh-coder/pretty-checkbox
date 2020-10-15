function colors(fragment) {
    var colors = fragment.appendChild(createSection('Colors'));
    colors.appendChild(createControl('Primary', { color: 'p-primary' }));
    colors.appendChild(createControl('Info', { color: 'p-info', variant: 'p-fill' }));

    colors.appendChild(createControl('Success', { color: 'p-success', variant: 'p-thick' }));

    colors.appendChild(
        createControl('Warning', {
            color: 'p-warning',
            variant: 'p-thick',
            shape: 'p-round',
        })
    );

    colors.appendChild(createControl('Danger', { color: 'p-danger', shape: 'p-curve' }));

    colors.appendChild(createControl('Primary Outline', { color: 'p-primary-o' }));
    colors.appendChild(createControl('Info Outline', { color: 'p-info-o', variant: 'p-fill' }));

    colors.appendChild(
        createControl('Success Outline', { color: 'p-success-o', variant: 'p-thick' })
    );

    colors.appendChild(
        createControl('Warning Outline', {
            color: 'p-warning-o',
            variant: 'p-thick',
            shape: 'p-round',
        })
    );

    colors.appendChild(createControl('Danger Outline', { color: 'p-danger-o', shape: 'p-curve' }));
}
