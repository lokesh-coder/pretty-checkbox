function radio(fragment) {
    var radio = fragment.appendChild(createSection('Basic Radio'));

    radio.appendChild(
        createControl('Regular Crust', { shape: 'p-round', type: 'radio', name: 'pizza' })
    );

    radio.appendChild(
        createControl('Thin Crust', { shape: 'p-round', type: 'radio', name: 'pizza' })
    );

    radio.appendChild(
        createControl('Deep Dish', { shape: 'p-round', type: 'radio', name: 'pizza' })
    );
}
