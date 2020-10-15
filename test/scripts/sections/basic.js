function basic(fragment) {
    var basic = fragment.appendChild(createSection('Basic Checkbox'));
    basic.appendChild(createControl('Basic Checkbox'));
    basic.appendChild(createControl('Curve Checkbox', { shape: 'p-curve' }));
    basic.appendChild(createControl('Round Checkbox', { shape: 'p-round' }));
    basic.appendChild(createControl('Fill Checkbox', { variant: 'p-fill' }));
    basic.appendChild(createControl('Thick Checkbox', { variant: 'p-thick' }));
}
