while (true) {
    if (input.soundLevel() > 120) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
