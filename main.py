while True:
    if input.sound_level() > 120:
        light.show_animation(light.rainbowAnimation, 500)
    else:
        light.clear()