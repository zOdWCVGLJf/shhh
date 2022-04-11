// tower
anime({
    targets: '#tower',
    translateY: -10,
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
}); 

// platforms

anime({
    targets: '#plat1',
    translateY: [
        {value: [0, -12], duration: 2400},
        {value: [-12, 0], duration: 2400}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat2',
    translateY: [
        {value: [-4, -12], duration: 1600, easing: 'easeOutSine'},
        {value: [-12, 0], duration: 2400, easing: 'easeInOutSine'},
        {value: [0, -4], duration: 800, easing: 'easeInSine'}
    ],
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat3',
    translateY: [
        {value: [-8, -12], duration: 800, easing: 'easeOutSine'},
        {value: [-12, 0], duration: 2400, easing: 'easeInOutSine'},
        {value: [0, -8], duration: 1600, easing: 'easeInSine'}
    ],
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat4',
    translateY: [
        {value: [-12, 0], duration: 2400},
        {value: [0, -12], duration: 2400}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat5',
    translateY: [
        {value: [-8, 0], duration: 1600, easing: 'easeOutSine'},
        {value: [0, -12], duration: 2400, easing: 'easeInOutSine'},
        {value: [-8], duration: 800, easing: 'easeInSine'}
    ],
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat6',
    translateY: [
        {value: [-4, 0], duration: 800, easing: 'easeOutSine'},
        {value: [0, -12], duration: 2400, easing: 'easeInOutSine'},
        {value: [-12, -4], duration: 1600, easing: 'easeInSine'}
    ],
    loop: true,
    delay: 0
}); 