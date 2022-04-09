// tower
anime({
    targets: '#tower',
    translateY: -10,
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
}); 

// platforms

anime({
    targets: '#plat1',
    translateY: [
        {value: -12, duration: 2400},
        {value: 0, duration: 2400}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat2',
    translateY: [
        {value: [-2, -12], duration: 2000},
        {value: 0, duration: 2400},
        {value: -2, duration: 400}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat3',
    translateY: [
        {value: [-4, -12], duration: 1600},
        {value: 0, duration: 2400},
        {value: -4, duration: 800}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat4',
    translateY: [
        {value: [-6, -12], duration: 1200},
        {value: 0, duration: 2400},
        {value: -6, duration: 1200}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat5',
    translateY: [
        {value: [-8, -12], duration: 800},
        {value: 0, duration: 2400},
        {value: -8, duration: 1600}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 

anime({
    targets: '#plat6',
    translateY: [
        {value: [-10, -12], duration: 400},
        {value: 0, duration: 2400},
        {value: -10, duration: 2000}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 0
}); 